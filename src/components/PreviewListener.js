"use client";

import { useEffect } from "react";

export default function PreviewListener() {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === "BIT_PREVIEW_UPDATE") {
        const { settings } = event.data;

        // 1. Update brand colors in CSS dynamically
        if (settings) {
          const root = document.documentElement;
          if (settings.brand_blue) root.style.setProperty("--brand-blue", settings.brand_blue);
          if (settings.brand_orange) root.style.setProperty("--brand-orange", settings.brand_orange);
          if (settings.brand_cyan) root.style.setProperty("--brand-cyan", settings.brand_cyan);
          if (settings.brand_purple) root.style.setProperty("--brand-purple", settings.brand_purple);
        }

        // 2. Dispatch custom event for page content updates
        window.dispatchEvent(new CustomEvent("bit_preview_update", { detail: event.data }));
      }
    };

    window.addEventListener("message", handleMessage);
    
    // Also trigger update on load if parent has stored draft
    const path = window.location.pathname;
    const isPreviewUrl = typeof window !== "undefined" && window.location.search.includes("preview=true");

    if (isPreviewUrl) {
      // Fetch dynamic preview settings from MySQL
      fetch("/api/settings?preview=true")
        .then(res => res.json())
        .then(data => {
          if (data.success && data.settings) {
            const root = document.documentElement;
            const settings = data.settings;
            if (settings.brand_blue) root.style.setProperty("--brand-blue", settings.brand_blue);
            if (settings.brand_orange) root.style.setProperty("--brand-orange", settings.brand_orange);
            if (settings.brand_cyan) root.style.setProperty("--brand-cyan", settings.brand_cyan);
            if (settings.brand_purple) root.style.setProperty("--brand-purple", settings.brand_purple);
          }
        })
        .catch(err => console.error("Error loading preview settings:", err));
    }

    try {
      const draft = localStorage.getItem("bit_preview_draft_" + path);
      const settingsDraft = localStorage.getItem("bit_preview_settings");
      if (draft || settingsDraft) {
        const parsedDraft = draft ? JSON.parse(draft) : null;
        const parsedSettings = settingsDraft ? JSON.parse(settingsDraft) : null;
        
        if (parsedSettings && !isPreviewUrl) {
          const root = document.documentElement;
          if (parsedSettings.brand_blue) root.style.setProperty("--brand-blue", parsedSettings.brand_blue);
          if (parsedSettings.brand_orange) root.style.setProperty("--brand-orange", parsedSettings.brand_orange);
          if (parsedSettings.brand_cyan) root.style.setProperty("--brand-cyan", parsedSettings.brand_cyan);
          if (parsedSettings.brand_purple) root.style.setProperty("--brand-purple", parsedSettings.brand_purple);
        }

        // Short timeout to let page components mount
        if (!isPreviewUrl) {
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent("bit_preview_update", {
              detail: {
                pageData: parsedDraft,
                settings: parsedSettings
              }
            }));
          }, 100);
        }
      }
    } catch(e){}

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
