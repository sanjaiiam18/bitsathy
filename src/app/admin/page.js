"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  Layout, 
  GraduationCap, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Eye, 
  Save, 
  GripVertical, 
  ChevronUp, 
  ChevronDown, 
  Type, 
  Image, 
  Megaphone, 
  Sliders, 
  TrendingUp, 
  Layers, 
  AlertCircle, 
  Globe, 
  Palette,
  Lock,
  PlusCircle,
  FileText,
  Code
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Active workspace tab
  const [activeTab, setActiveTab] = useState("pages"); // "pages" | "departments" | "settings"

  const defaultNav = [
    {
      name: "About BIT",
      href: "/about",
      submenu: [
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Milestones", href: "/about/milestones" },
        { name: "Achievements", href: "/about/achievements" },
        { name: "Approvals & Circulars", href: "/about/approvals-circulars" }
      ]
    },
    {
      name: "Administration",
      href: "/administration",
      submenu: [
        { name: "Governing Council", href: "/administration/governing-council" },
        { name: "Chairman's Desk", href: "/administration/chairmans-desk" },
        { name: "Principal's Desk", href: "/administration/principals-desk" },
        { name: "Dean - Administration", href: "/administration/dean-administration" }
      ]
    },
    {
      name: "Academics",
      href: "/academics",
      submenu: [
        { name: "Departments Catalog", href: "/academics" },
        { name: "Programmes Offered", href: "/academics/programmes-offered" },
        { name: "Office of the CoE", href: "/academics/coecorner" },
        { name: "Regulations", href: "/academics/regulations" },
        { name: "Academic Calendar", href: "/academics/academic-calendar" },
        { name: "Learning Centre", href: "/academics/learning-centre" },
        { name: "English Cell (ELCC)", href: "/academics/elcc" },
        { name: "Enhancement Schemes", href: "/academics/capability-enhancement-schemes" }
      ]
    },
    {
      name: "Placements",
      href: "/placements"
    },
    {
      name: "Life at BIT",
      href: "/campus-life",
      submenu: [
        { name: "Clubs & Societies", href: "/campus-life/clubs-societies" },
        { name: "Campus Facilities", href: "/campus-life/facilities" },
        { name: "Sports Facilities", href: "/campus-life/sports" },
        { name: "Gymnasium", href: "/campus-life/gymnasium" },
        { name: "College Bus routes", href: "/campus-life/bus" },
        { name: "Hostel & Medical", href: "/campus-life/hostel-medical" },
        { name: "Sustainability & Green", href: "/campus-life/green" }
      ]
    },
    {
      name: "Research",
      href: "/research",
      submenu: [
        { name: "Advisory Board", href: "/research/advisory-board" },
        { name: "Academic Research", href: "/research/academic" },
        { name: "Research Facilities", href: "/research/facilities" },
        { name: "Research Centres", href: "/research/centres" },
        { name: "Quality Improvement (QIP)", href: "/research/qip" },
        { name: "R&D Newsletter", href: "/research/newsletter" }
      ]
    },
    {
      name: "Gurugulam",
      href: "/gurugulam"
    },
    {
      name: "PIC",
      href: "/product-innovation-centre"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ];

  const defaultGlimpses = {
    "About & Administration": [
      { title: "Vision & Mission", desc: "Our core principles, vision for the future of technical education, and core institutional values.", href: "/about/vision-mission", icon: "eye" },
      { title: "Milestones", desc: "Take a trip through the history of BIT Sathy and the key achievements we have completed since 1996.", href: "/about/milestones", icon: "calendar" },
      { title: "Achievements", desc: "Outstanding recognition, awards, ranking metrics, and championship trophies won by the college.", href: "/about/achievements", icon: "award" },
      { title: "Approvals & Circulars", desc: "View official regulatory letters, UGC autonomy mandates, Anna University affiliations, and circular notifications.", href: "/about/approvals-circulars", icon: "file" },
      { title: "Governing Council", desc: "Meet the governing board directing policy implementations, compliance, and budget planning.", href: "/administration/governing-council", icon: "users" },
      { title: "Chairman's Desk", desc: "Welcome letter and pedagogical direction from our Chairman, Thiru S. V. Balasubramaniam.", href: "/administration/chairmans-desk", icon: "user" },
      { title: "Principal's Desk", desc: "Academic welcome and student excellence message from our Principal, Dr. C. Palanisamy.", href: "/administration/principals-desk", icon: "book" },
      { title: "Dean - Administration", desc: "General campus coordination, accreditation standards, and student life guidelines led by Dr. K. Sivakumar.", href: "/administration/dean-administration", icon: "building" }
    ],
    "Academic & Support": [
      { title: "Programmes Offered", desc: "Full catalog of undergraduate B.E. & B.Tech courses with corporate partnerships.", href: "/academics/programmes-offered", icon: "book" },
      { title: "Office of the CoE", desc: "Examination guidelines, regulations, grading scales, assessment notifications, and results corner.", href: "/academics/coecorner", icon: "award" },
      { title: "Academic Regulations", desc: "Understand grading schemes, credit definitions, elective registration systems, and student conduct rules.", href: "/academics/regulations", icon: "file" },
      { title: "Academic Calendar", desc: "Track semester sessions, internal review schedules, holidays, and college events.", href: "/academics/academic-calendar", icon: "calendar" },
      { title: "Learning Centre", desc: "Library resources, featuring 100k+ print titles, digital journal networks, and quiet study sections.", href: "/academics/learning-centre", icon: "book" },
      { title: "English Cell (ELCC)", desc: "Language lab, soft skills training, public speaking seminars, and placement writing prep.", href: "/academics/elcc", icon: "users" },
      { title: "Capability Schemes", desc: "Advanced student grooming, professional certifications, and capability coaching programs.", href: "/academics/capability-enhancement-schemes", icon: "star" }
    ],
    "Research & Development": [
      { title: "Advisory Board", desc: "The international academic and executive team setting the direction for our research labs.", href: "/research/advisory-board", icon: "users" },
      { title: "Academic Research", desc: "Information for Ph.D. scholars, recognized guides, and Anna University doctoral guidelines.", href: "/research/academic", icon: "book" }
    ]
  };

  // Settings states
  const [settings, setSettings] = useState({
    brand_blue: "#1e3a8a",
    brand_orange: "#f97316",
    brand_cyan: "#06b6d4",
    brand_purple: "#6366f1",
    site_name: "Bannari Amman Institute of Technology",
    site_logo: "/logo.png",
    site_footer_text: "© 2026 Bannari Amman Institute of Technology. All Rights Reserved.",
    site_navigation: JSON.stringify(defaultNav),
    site_glimpses: JSON.stringify(defaultGlimpses),
  });
  const [savingSettings, setSavingSettings] = useState(false);

  // Pages States
  const [dbPages, setDbPages] = useState([]);
  const [pagePaths, setPagePaths] = useState([
    { path: "/", label: "Home Page" },
    { path: "/placements", label: "Placements" },
    { path: "/campus-life/gymnasium", label: "Gymnasium Hub" },
    { path: "/contact", label: "Contact Us" },
    { path: "/gurugulam", label: "Flagship: Gurugulam" },
    { path: "/product-innovation-centre", label: "Flagship: Product Innovation Centre" },
    { path: "/administration", label: "Administration: Main" }
  ]);

  useEffect(() => {
    const corePaths = [
      { path: "/", label: "Home Page" },
      { path: "/placements", label: "Placements" },
      { path: "/campus-life/gymnasium", label: "Gymnasium Hub" },
      { path: "/contact", label: "Contact Us" },
      { path: "/gurugulam", label: "Flagship: Gurugulam" },
      { path: "/product-innovation-centre", label: "Flagship: Product Innovation Centre" },
      { path: "/administration", label: "Administration: Main" }
    ];

    const merged = [...corePaths];

    if (settings.site_navigation) {
      try {
        const nav = typeof settings.site_navigation === "string"
          ? JSON.parse(settings.site_navigation)
          : settings.site_navigation;
        if (Array.isArray(nav)) {
          nav.forEach((item) => {
            if (item.href && item.href.startsWith("/") && item.href !== "#") {
              const label = item.name || item.href;
              if (!merged.some((m) => m.path === item.href)) {
                merged.push({ path: item.href, label });
              }
            }
            if (item.submenu && Array.isArray(item.submenu)) {
              item.submenu.forEach((sub) => {
                if (sub.href && sub.href.startsWith("/") && sub.href !== "#") {
                  const categoryName = item.name || "";
                  const label = categoryName ? `${categoryName}: ${sub.name}` : sub.name;
                  if (!merged.some((m) => m.path === sub.href)) {
                    merged.push({ path: sub.href, label });
                  }
                }
              });
            }
          });
        }
      } catch (e) {
        console.error("Error parsing site navigation for page paths:", e);
      }
    }

    if (dbPages && Array.isArray(dbPages)) {
      dbPages.forEach((p) => {
        let label = p.title || p.path;
        if (p.path === "/") label = "Home Page";
        else if (p.path === "/placements") label = "Placements";
        else if (p.path === "/campus-life/gymnasium") label = "Gymnasium Hub";
        else if (p.path === "/contact") label = "Contact Us";
        else if (p.path === "/gurugulam") label = "Flagship: Gurugulam";
        else if (p.path === "/product-innovation-centre") label = "Flagship: Product Innovation Centre";
        else {
          const parts = p.path.split("/").filter(Boolean);
          if (parts.length >= 2) {
            const category = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
            const name = p.title || (parts[1].charAt(0).toUpperCase() + parts[1].slice(1).replace(/-/g, " "));
            label = `${category}: ${name}`;
          } else if (parts.length === 1) {
            label = p.title || (parts[0].charAt(0).toUpperCase() + parts[0].slice(1));
          }
        }

        const idx = merged.findIndex((m) => m.path === p.path);
        if (idx === -1) {
          merged.push({ path: p.path, label });
        } else {
          if (p.title) {
            merged[idx].label = label;
          }
        }
      });
    }

    setPagePaths(merged);
  }, [dbPages, settings.site_navigation]);

  const [selectedPath, setSelectedPath] = useState("/");
  const [pageData, setPageData] = useState({
    title: "",
    subtitle: "",
    intro: "",
    metrics: [],
    sections: [],
  });
  const [loadingPage, setLoadingPage] = useState(false);
  const [savingPage, setSavingPage] = useState(false);
  const [deletingPage, setDeletingPage] = useState(false);

  // Modal State for adding new page
  const [isAddPageOpen, setIsAddPageOpen] = useState(false);
  const [newPageCategory, setNewPageCategory] = useState("about");
  const [newPageSlug, setNewPageSlug] = useState("");
  const [newPageTitle, setNewPageTitle] = useState("");

  // Drag and Drop States
  const [draggedIdx, setDraggedIdx] = useState(null);
  const [isDragOverDropzone, setIsDragOverDropzone] = useState(false);

   // Preview Mode
  const [previewDevice, setPreviewDevice] = useState("desktop"); // "desktop" | "mobile"
  const [editHistory, setEditHistory] = useState([]);
  const [savingPreview, setSavingPreview] = useState(false);

  // JSON Code Editor support
  const [editorMode, setEditorMode] = useState("visual"); // "visual" | "code"
  const [jsonCode, setJsonCode] = useState("");
  const [jsonError, setJsonError] = useState(null);

  useEffect(() => {
    if (editorMode !== "code") {
      setJsonCode(JSON.stringify(pageData, null, 2));
    }
  }, [pageData, editorMode]);

  const iframeRef = useRef(null);

  useEffect(() => {
    // Send state to preview frame
    const sendPreviewData = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage({
          type: "BIT_PREVIEW_UPDATE",
          pageData: pageData,
          settings: settings,
        }, "*");
      }
    };
    sendPreviewData();

    // Also update localStorage so iframe loads it on initial mount
    try {
      localStorage.setItem("bit_preview_draft_" + selectedPath, JSON.stringify(pageData));
      localStorage.setItem("bit_preview_settings", JSON.stringify(settings));
    } catch(e) {}
  }, [pageData, settings, selectedPath]);

  // Departments States
  const [departments, setDepartments] = useState([]);
  const [selectedDeptSlug, setSelectedDeptSlug] = useState("");
  const [deptData, setDeptData] = useState({
    slug: "",
    name: "",
    code: "",
    category: "",
    established: "",
    intake: 0,
    labs_count: 0,
    placement_ratio: "",
    nba_accredited: 0,
    nba_period: "",
    vision: "",
    mission_json: "[]",
    labs_json: "[]",
    recruiters_json: "[]",
    highlights_json: "[]",
    faculty_json: "[]",
    hod_name: "",
    hod_email: "",
    hod_designation: "",
    hod_image: "",
  });
  const [loadingDept, setLoadingDept] = useState(false);
  const [savingDept, setSavingDept] = useState(false);

  // Check Authentication on Mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        loadGlobalSettings();
        loadPageContent("/");
        loadDepartments();
        loadAllPages();
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      setIsAuthenticated(false);
    } finally {
      setCheckingAuth(false);
    }
  };

  // Load All Pages List from DB
  const loadAllPages = async () => {
    try {
      const res = await fetch("/api/content?type=pages");
      const data = await res.json();
      if (data.success && data.pages) {
        setDbPages(data.pages);
      }
    } catch (err) {
      console.error("Error loading pages from DB:", err);
    }
  };

  // Load Global Settings
  const loadGlobalSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data.success && data.settings) {
        setSettings((prev) => ({ ...prev, ...data.settings }));
      }
    } catch (err) {
      console.error("Error loading settings:", err);
    }
  };

  // Load Departments List
  const loadDepartments = async () => {
    try {
      const res = await fetch("/api/content?type=departments");
      const data = await res.json();
      if (data.success && data.departments) {
        setDepartments(data.departments);
        if (data.departments.length > 0 && !selectedDeptSlug) {
          setSelectedDeptSlug(data.departments[0].slug);
          fetchDeptDetails(data.departments[0].slug);
        }
      }
    } catch (err) {
      console.error("Error loading departments:", err);
    }
  };

  // Fetch selected department details
  const fetchDeptDetails = async (slug) => {
    setLoadingDept(true);
    try {
      const res = await fetch(`/api/content?type=department&slug=${slug}`);
      const data = await res.json();
      if (data.success && data.department) {
        setDeptData(data.department);
      }
    } catch (err) {
      console.error("Error loading department details:", err);
    } finally {
      setLoadingDept(false);
    }
  };

  // Load Edit History
  const loadEditHistory = async (path) => {
    try {
      const res = await fetch(`/api/preview?path=${encodeURIComponent(path)}`);
      const data = await res.json();
      if (data.success) {
        setEditHistory(data.history || []);
      } 
    } catch (err) {
      console.error("Failed to load edit history:", err);
    }
  };

  // Restore dynamic draft/history version
  const handleRestoreHistoryVersion = async (versionId) => {
    if (!window.confirm("Are you sure you want to restore this draft version? This will load the draft data into the editor (you still need to save to make it live).")) {
      return;
    }
    try {
      const res = await fetch(`/api/preview?path=${encodeURIComponent(selectedPath)}&id=${versionId}`);
      const data = await res.json();
      if (data.success && data.draft) {
        setPageData(data.draft.pageData);
        if (data.draft.settings) {
          setSettings(data.draft.settings);
        }
        alert("Draft version restored into the editor successfully!");
      } else {
        alert("Error restoring version: " + data.error);
      }
    } catch (err) {
      console.error("Failed to restore history version:", err);
      alert("Failed to restore history version.");
    }
  };

  // Preview Draft handler: saves current state to MySQL draft history, then opens preview
  const handlePreviewDraft = async (targetPath) => {
    try {
      setSavingPreview(true);
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: targetPath,
          pageData: pageData,
          settings: settings,
        }),
      });

      const data = await res.json();
      if (data.success) {
        // Reload history list
        await loadEditHistory(targetPath);
      } else {
        console.error("Failed to save preview draft to MySQL:", data.error);
      }
    } catch (err) {
      console.error("Error saving preview draft:", err);
    } finally {
      setSavingPreview(false);
      // Open preview window
      window.open(`${targetPath}?preview=true`, '_blank');
    }
  };

  // Load Page Content
  const loadPageContent = async (path) => {
    setLoadingPage(true);
    try {
      const res = await fetch(`/api/content?path=${encodeURIComponent(path)}&preview=true`);
      const data = await res.json();
      if (data.success && data.page) {
        setPageData({
          title: data.page.title || "",
          subtitle: data.page.subtitle || "",
          intro: data.page.intro || "",
          metrics: data.page.metrics || [],
          sections: data.page.sections || [],
        });
      } else {
        // Fallback initialized page settings
        setPageData({
          title: "Page Title",
          subtitle: "SUBTITLE INFO",
          intro: "This page does not have layouts provisioned yet. Add section blocks or use controls.",
          metrics: [],
          sections: [],
        });
      }
      // Load history for the page
      await loadEditHistory(path);
    } catch (err) { 
      console.error("Error loading page content:", err);
    } finally {
      setLoadingPage(false);
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        loadGlobalSettings();
        loadPageContent(selectedPath);
        loadDepartments();
      } else {
        setLoginError(data.error || "Login failed. Please check credentials.");
      }
    } catch (err) {
      setLoginError("Server error. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setIsAuthenticated(false);
      router.push("/");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Save Settings handler
  const handleSaveSettings = async () => {
    setSavingSettings(true);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Global brand configurations and styles updated! Changes applied instantly.");
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Failed to save settings.");
    } finally {
      setSavingSettings(false);
    }
  };

  // Navigation settings helpers
  let navItems = [];
  try {
    navItems = JSON.parse(settings.site_navigation || "[]");
  } catch (e) {
    if (Array.isArray(settings.site_navigation)) {
      navItems = settings.site_navigation;
    }
  }

  const updateNavigationSetting = (newNav) => {
    setSettings((prev) => ({
      ...prev,
      site_navigation: JSON.stringify(newNav)
    }));
  };

  const handleNavChange = (index, field, value) => {
    const updated = [...navItems];
    updated[index] = { ...updated[index], [field]: value };
    updateNavigationSetting(updated);
  };

  const handleSubnavChange = (parentIndex, subIndex, field, value) => {
    const updated = [...navItems];
    const sub = [...(updated[parentIndex].submenu || [])];
    sub[subIndex] = { ...sub[subIndex], [field]: value };
    updated[parentIndex] = { ...updated[parentIndex], submenu: sub };
    updateNavigationSetting(updated);
  };

  const addTopNavLink = () => {
    const name = window.prompt("Enter link label:");
    if (!name) return;
    const href = window.prompt("Enter link URL:", "/");
    if (!href) return;
    const updated = [...navItems, { name, href }];
    updateNavigationSetting(updated);
  };

  const addSubNavLink = (parentIndex) => {
    const name = window.prompt("Enter sub-link label:");
    if (!name) return;
    const href = window.prompt("Enter sub-link URL:", "/");
    if (!href) return;
    const updated = [...navItems];
    const sub = [...(updated[parentIndex].submenu || []), { name, href }];
    updated[parentIndex] = { ...updated[parentIndex], submenu: sub };
    updateNavigationSetting(updated);
  };

  const deleteTopNavLink = (index) => {
    if (!window.confirm("Delete this navigation menu link?")) return;
    const updated = navItems.filter((_, idx) => idx !== index);
    updateNavigationSetting(updated);
  };

  const deleteSubNavLink = (parentIndex, subIndex) => {
    if (!window.confirm("Delete this sub-link?")) return;
    const updated = [...navItems];
    const sub = updated[parentIndex].submenu.filter((_, idx) => idx !== subIndex);
    updated[parentIndex] = { ...updated[parentIndex], submenu: sub.length > 0 ? sub : undefined };
    updateNavigationSetting(updated);
  };

  const moveTopNavLink = (index, direction) => {
    const updated = [...navItems];
    const target = index + direction;
    if (target < 0 || target >= updated.length) return;
    const temp = updated[index];
    updated[index] = updated[target];
    updated[target] = temp;
    updateNavigationSetting(updated);
  };

  const moveSubNavLink = (parentIndex, subIndex, direction) => {
    const updated = [...navItems];
    const sub = [...(updated[parentIndex].submenu || [])];
    const target = subIndex + direction;
    if (target < 0 || target >= sub.length) return;
    const temp = sub[subIndex];
    sub[subIndex] = sub[target];
    sub[target] = temp;
    updated[parentIndex] = { ...updated[parentIndex], submenu: sub };
    updateNavigationSetting(updated);
  };

  // Glimpses settings helpers
  let glimpsesObj = {};
  try {
    glimpsesObj = JSON.parse(settings.site_glimpses || "{}");
  } catch (e) {
    if (settings.site_glimpses && typeof settings.site_glimpses === "object") {
      glimpsesObj = settings.site_glimpses;
    }
  }

  const updateGlimpsesSetting = (newGlimpses) => {
    setSettings((prev) => ({
      ...prev,
      site_glimpses: JSON.stringify(newGlimpses)
    }));
  };

  const addGlimpseCategory = () => {
    const category = window.prompt("Enter new category name:");
    if (!category) return;
    if (glimpsesObj[category]) {
      alert("Category already exists.");
      return;
    }
    const updated = { ...glimpsesObj, [category]: [] };
    updateGlimpsesSetting(updated);
  };

  const deleteGlimpseCategory = (category) => {
    if (!window.confirm(`Delete the entire category "${category}" and all its glimpse cards?`)) return;
    const updated = { ...glimpsesObj };
    delete updated[category];
    updateGlimpsesSetting(updated);
  };

  const addGlimpseCard = (category) => {
    const title = window.prompt("Enter card title:");
    if (!title) return;
    const desc = window.prompt("Enter card description:");
    if (!desc) return;
    const href = window.prompt("Enter card link (e.g. /about/vision-mission):", "/");
    if (!href) return;
    const icon = window.prompt("Enter icon name (e.g. eye, calendar, award, file, users, user, book, building, star):", "eye");

    const newCard = { title, desc, href, icon: icon || "eye" };
    const updated = {
      ...glimpsesObj,
      [category]: [...(glimpsesObj[category] || []), newCard]
    };
    updateGlimpsesSetting(updated);
  };

  const deleteGlimpseCard = (category, index) => {
    if (!window.confirm("Delete this glimpse card?")) return;
    const updated = {
      ...glimpsesObj,
      [category]: glimpsesObj[category].filter((_, idx) => idx !== index)
    };
    updateGlimpsesSetting(updated);
  };

  const handleGlimpseCardChange = (category, index, field, value) => {
    const updatedCards = [...glimpsesObj[category]];
    updatedCards[index] = { ...updatedCards[index], [field]: value };
    const updated = {
      ...glimpsesObj,
      [category]: updatedCards
    };
    updateGlimpsesSetting(updated);
  };

  const moveGlimpseCard = (category, index, direction) => {
    const updatedCards = [...glimpsesObj[category]];
    const target = index + direction;
    if (target < 0 || target >= updatedCards.length) return;
    const temp = updatedCards[index];
    updatedCards[index] = updatedCards[target];
    updatedCards[target] = temp;
    const updated = {
      ...glimpsesObj,
      [category]: updatedCards
    };
    updateGlimpsesSetting(updated);
  };

  // Save Page content handler
  const handleSavePage = async () => {
    setSavingPage(true);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: selectedPath,
          title: pageData.title,
          subtitle: pageData.subtitle,
          intro: pageData.intro,
          metrics: pageData.metrics,
          sections: pageData.sections,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Page layout configuration published successfully! Page is now updated in real-time.");
        loadPageContent(selectedPath);
        loadAllPages();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Failed to save page contents.");
    } finally {
      setSavingPage(false);
    }
  };

  // Delete Page Template handler
  const handleDeletePage = async () => {
    if (["/", "/placements", "/campus-life/gymnasium", "/contact"].includes(selectedPath)) {
      alert("Core college pages cannot be deleted!");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete the custom page template at '${selectedPath}'? This action is permanent.`)) {
      return;
    }
    setDeletingPage(true);
    try {
      const res = await fetch(`/api/content?path=${encodeURIComponent(selectedPath)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert("Page template deleted successfully!");
        loadAllPages();
        setSelectedPath("/");
        loadPageContent("/");
      } else {
        alert("Error deleting page: " + data.error);
      }
    } catch (err) {
      alert("Failed to delete page template.");
    } finally {
      setDeletingPage(false);
    }
  };

  // Create new page flow
  const handleCreateNewPage = (e) => {
    e.preventDefault();
    if (!newPageSlug) return;
    
    // Normalize slug
    const cleanSlug = newPageSlug.toLowerCase().trim().replace(/[^a-z0-9_-]/g, "-");
    const path = `/${newPageCategory}/${cleanSlug}`;
    
    // Check if page already exists in state
    if (pagePaths.some((p) => p.path === path)) {
      alert("Page already exists!");
      return;
    }

    const newPageItem = {
      path,
      label: `${newPageCategory.charAt(0).toUpperCase() + newPageCategory.slice(1)}: ${newPageTitle || cleanSlug}`,
    };

    setPagePaths((prev) => [...prev, newPageItem]);
    setSelectedPath(path);
    
    // Initialize default layout content for the new page
    setPageData({
      title: newPageTitle || "New Dynamic Page",
      subtitle: `${newPageCategory.toUpperCase()} | BIT SATHY`,
      intro: "This is a brand new page custom-built through the admin console. Start customization in the left panel.",
      metrics: [
        { label: "Established", value: "2026" },
        { label: "Placement Ratio", value: "98%+" }
      ],
      sections: [
        {
          title: "Introduction to Section",
          subtitle: "Start Customizing",
          desc: "You can write paragraphs, configure image paths, set layout mode, and drag this section list elements to align.",
          image_url: "https://www.bitsathy.ac.in/wp-content/uploads/Cadence-2-scaled.jpg",
          video_url: "",
          btn_text: "Learn More",
          btn_url: "/contact",
          alignment: "left",
          layout_type: "image-right"
        }
      ]
    });

    setIsAddPageOpen(false);
    setNewPageSlug("");
    setNewPageTitle("");
  };

  // Save Department handler
  const handleSaveDept = async () => {
    setSavingDept(true);
    try {
      // Parse JSON fields to ensure valid structure
      const mission = JSON.parse(deptData.mission_json || "[]");
      const labs = JSON.parse(deptData.labs_json || "[]");
      const recruiters = JSON.parse(deptData.recruiters_json || "[]");
      const highlights = JSON.parse(deptData.highlights_json || "[]");
      const faculty = JSON.parse(deptData.faculty_json || "[]");

      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "department",
          ...deptData,
          mission,
          labs,
          recruiters,
          highlights,
          faculty,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Department details and HOD metrics saved successfully!");
        loadDepartments();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Failed to save department. Make sure JSON array structures are correct.");
    } finally {
      setSavingDept(false);
    }
  };

  // --- HTML5 Drag and Drop Handlers for Reordering and Inserting ---
  const handleDragStart = (e, index) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOverDropzone(true);
  };

  const handleDragLeave = () => {
    setIsDragOverDropzone(false);
  };

  const addSectionOfLayout = (layoutType) => {
    const title = window.prompt(`Enter Title for the New Section:`, "New Custom Block");
    if (title === null) return; // cancelled

    const newSection = {
      title: title || "New Custom Block",
      subtitle: "Add content subtitle",
      desc: "Write section paragraphs here. Customize button text and links below.",
      image_url: layoutType === "standard" ? "" : "https://www.bitsathy.ac.in/wp-content/uploads/Cadence-2-scaled.jpg",
      video_url: "",
      btn_text: "Enquire Now",
      btn_url: "/contact",
      alignment: "left",
      layout_type: layoutType,
      title_align: "left",
      title_color: "",
    };
    setPageData({ ...pageData, sections: [...pageData.sections, newSection] });
  };

  const handleDropOnList = (e, index = null) => {
    e.preventDefault();
    setIsDragOverDropzone(false);
    const data = e.dataTransfer.getData("text/plain");

    // Case 1: Dropping a layout element from the Drag-and-Drop library to ADD a section
    if (data && data.startsWith("layout:")) {
      const layoutType = data.split(":")[1];
      const title = window.prompt(`Enter Title for the New Section:`, "New Custom Block");
      if (title === null) return; // cancelled

      const newSection = {
        title: title || "New Custom Block",
        subtitle: "Add content subtitle",
        desc: "Write section paragraphs here. Customize button text and links below.",
        image_url: layoutType === "standard" ? "" : "https://www.bitsathy.ac.in/wp-content/uploads/Cadence-2-scaled.jpg",
        video_url: "",
        btn_text: "Enquire Now",
        btn_url: "/contact",
        alignment: "left",
        layout_type: layoutType,
        title_align: "left",
        title_color: "",
      };

      const newSections = [...pageData.sections];
      if (index === null) {
        newSections.push(newSection);
      } else {
        newSections.splice(index, 0, newSection);
      }

      setPageData({ ...pageData, sections: newSections });
      return;
    }

    // Case 2: Standard reordering of existing sections
    if (draggedIdx !== null && index !== null && draggedIdx !== index) {
      const newSections = [...pageData.sections];
      const draggedItem = newSections[draggedIdx];
      
      // Swap/Re-order
      newSections.splice(draggedIdx, 1);
      newSections.splice(index, 0, draggedItem);
      
      setPageData({ ...pageData, sections: newSections });
      setDraggedIdx(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
    setIsDragOverDropzone(false);
  };

  // --- Manual section order controls ---
  const moveSection = (index, direction) => {
    const newSections = [...pageData.sections];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= newSections.length) return;

    // Swap
    const temp = newSections[index];
    newSections[index] = newSections[targetIdx];
    newSections[targetIdx] = temp;

    setPageData({ ...pageData, sections: newSections });
  };

  const deleteSection = (index) => {
    if (!window.confirm("Are you sure you want to delete this section block?")) return;
    const newSections = pageData.sections.filter((_, idx) => idx !== index);
    setPageData({ ...pageData, sections: newSections });
  };

  const addSection = () => {
    addSectionOfLayout("image-right");
  };

  const updateSectionField = (index, field, value) => {
    const newSections = [...pageData.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setPageData({ ...pageData, sections: newSections });
  };

  // --- Page Metrics list controls ---
  const updateMetric = (index, field, value) => {
    const newMetrics = [...pageData.metrics];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    setPageData({ ...pageData, metrics: newMetrics });
  };

  const deleteMetric = (index) => {
    const newMetrics = pageData.metrics.filter((_, idx) => idx !== index);
    setPageData({ ...pageData, metrics: newMetrics });
  };

  const addMetric = () => {
    setPageData({
      ...pageData,
      metrics: [...pageData.metrics, { label: "Metric Label", value: "99%+" }],
    });
  };

  // Handle path selection change
  const handlePathChange = (e) => {
    const path = e.target.value;
    setSelectedPath(path);
    loadPageContent(path);
  };

  // Handle department selection change
  const handleDeptChange = (e) => {
    const slug = e.target.value;
    setSelectedDeptSlug(slug);
    fetchDeptDetails(slug);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans text-slate-800">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-semibold tracking-wider">Loading Administrator Environment...</p>
        </div>
      </div>
    );
  }

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans px-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-xl relative z-10 animate-fade-in">
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-3xl font-black tracking-tight text-slate-900 block mb-2">
              BIT <span className="text-brand-orange">Console</span>
            </span>
            <p className="text-slate-500 text-sm">Sign in to edit college pages, brand colors, and section structures.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-150 text-red-650 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Username</label>
              <input
                type="text"
                required
                placeholder="Enter admin username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="Enter password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2"
            >
              {loginLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Access Dashboard</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- ADMIN WORKSPACE ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col h-screen overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            --brand-blue: ${settings.brand_blue};
            --brand-orange: ${settings.brand_orange};
            --brand-cyan: ${settings.brand_cyan};
            --brand-purple: ${settings.brand_purple};
          }
        `
      }} />

      {/* Header bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0 z-30 relative shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-tight text-slate-900">
            BIT <span className="text-brand-orange">WixEditor</span>
          </span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold tracking-wider uppercase">
            Live Workspace Mode
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handlePreviewDraft(activeTab === "settings" ? "/" : selectedPath)}
            disabled={savingPreview}
            className="text-xs font-bold px-4 py-2 rounded-xl bg-brand-blue/10 hover:bg-brand-blue/15 text-brand-blue border border-brand-blue/20 transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50"
            title="Save draft and open live preview in new window"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{savingPreview ? "Drafting..." : "Preview Draft"}</span>
          </button>
          <a
            href="/"
            target="_blank"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Live Site</span>
          </a>
          <button
            onClick={handleLogout}
            className="text-xs font-bold px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main split-screen workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar tabs */}
        <aside className="w-16 sm:w-64 bg-white border-r border-slate-200 p-4 sm:p-6 flex flex-col gap-2 shrink-0 overflow-y-auto shadow-sm">
          <p className="hidden sm:block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-3">Wix Controls</p>
          
          <button
            onClick={() => setActiveTab("pages")}
            className={`w-full text-left px-3 sm:px-4 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-colors ${
              activeTab === "pages"
                ? "bg-brand-blue text-white shadow-md shadow-brand-blue/15"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Layout className="w-4 h-4" />
            <span className="hidden sm:inline">Pages &amp; Sections</span>
          </button>

          <button
            onClick={() => setActiveTab("departments")}
            className={`w-full text-left px-3 sm:px-4 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-colors ${
              activeTab === "departments"
                ? "bg-brand-blue text-white shadow-md shadow-brand-blue/15"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span className="hidden sm:inline">Departments Editor</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-3 sm:px-4 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-colors ${
              activeTab === "settings"
                ? "bg-brand-blue text-white shadow-md shadow-brand-blue/15"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Styles &amp; Colors</span>
          </button>
        </aside>

        {/* Content workspace area split panel */}
        <div className="flex-1 flex overflow-hidden bg-slate-50 text-slate-800">
          
          {/* --- TAB A: PAGES & SECTIONS WORKSPACE --- */}
          {activeTab === "pages" && (
            <div className="flex-1 flex flex-col overflow-hidden w-full">
              {/* Editor Controls (Centered full width) */}
              <div className="w-full max-w-5xl mx-auto flex flex-col h-full overflow-y-auto p-6 space-y-6">
                
                {/* Control bar */}
                <div className="space-y-4 border-b border-slate-200 pb-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-black tracking-tight text-slate-900">Wix Canvas Editor</h2>
                      <p className="text-slate-500 text-[10px] mt-0.5">Edit, reorder blocks, add custom pages.</p>
                    </div>
                    
                    <button
                      onClick={() => setIsAddPageOpen(true)}
                      className="px-3.5 py-2 rounded-xl bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue border border-brand-blue/10 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Page</span>
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <label className="block text-[9px] font-bold text-slate-600 uppercase mb-1">Select Page to Edit</label>
                      <select
                        value={selectedPath}
                        onChange={handlePathChange}
                        className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-brand-orange"
                      >
                        {pagePaths.map((p) => (
                          <option key={p.path} value={p.path}>
                            {p.label} ({p.path})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-end gap-2">
                      <button
                        onClick={() => handlePreviewDraft(selectedPath)}
                        disabled={savingPreview || loadingPage}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-widest transition-colors border border-slate-200 flex items-center gap-1.5 shadow-sm disabled:opacity-50"
                        title="Save draft and open live preview in new window"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-500" />
                        <span>{savingPreview ? "Drafting..." : "Preview"}</span>
                      </button>

                      <button
                        onClick={handleSavePage}
                        disabled={savingPage || loadingPage}
                        className="px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white font-black text-xs uppercase tracking-widest transition-colors shadow-lg disabled:opacity-50 flex items-center gap-1.5"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>{savingPage ? "Publishing..." : "Save"}</span>
                      </button>

                      {/* Delete Page button */}
                      {!["/", "/placements", "/campus-life/gymnasium", "/contact"].includes(selectedPath) && (
                        <button
                          onClick={handleDeletePage}
                          disabled={deletingPage || loadingPage}
                          className="px-3 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-150 font-black text-xs uppercase transition-colors flex items-center gap-1"
                          title="Delete custom page template"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Edit History Section */}
                  {editHistory.length > 0 && (
                    <div className="mt-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-brand-blue" />
                        <span className="text-xs font-bold text-slate-700">Page Draft History &amp; Backups</span>
                      </div>
                      <div className="max-h-32 overflow-y-auto flex flex-col gap-2">
                        {editHistory.map((item, idx) => (
                          <div key={item.id} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-100 text-xs shadow-sm">
                            <div className="flex flex-col">
                              <span className="font-semibold text-slate-800">
                                {idx === 0 ? "Latest Preview Draft" : `Version #${item.id}`}
                              </span>
                              <span className="text-[10px] text-slate-500">
                                {new Date(item.created_at).toLocaleString()}
                              </span>
                            </div>
                            <button
                              onClick={() => handleRestoreHistoryVersion(item.id)}
                              className="px-2.5 py-1 text-[10px] font-bold text-brand-blue bg-brand-blue/5 hover:bg-brand-blue/10 border border-brand-blue/15 rounded-md transition-colors"
                            >
                              Restore
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {loadingPage ? (
                  <div className="py-20 text-center text-slate-500 flex flex-col items-center justify-center flex-1">
                    <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin mb-4"></div>
                    Fetching layouts from DB...
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Editor Mode Selector tabs */}
                    <div className="flex border-b border-slate-200 bg-white rounded-t-xl overflow-hidden shadow-sm mb-4">
                      <button
                        onClick={() => {
                          setEditorMode("visual");
                          setJsonError(null);
                        }}
                        className={`flex-1 py-3 text-xs font-black uppercase tracking-wider border-b-2 text-center transition-all flex items-center justify-center gap-1.5 ${
                          editorMode === "visual"
                            ? "border-brand-blue text-brand-blue bg-brand-blue/5"
                            : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                        }`}
                      >
                        <Palette className="w-4 h-4 text-brand-blue" />
                        <span>Visual Canvas Editor</span>
                      </button>
                      <button
                        onClick={() => {
                          setJsonCode(JSON.stringify(pageData, null, 2));
                          setEditorMode("code");
                          setJsonError(null);
                        }}
                        className={`flex-1 py-3 text-xs font-black uppercase tracking-wider border-b-2 text-center transition-all flex items-center justify-center gap-1.5 ${
                          editorMode === "code"
                            ? "border-brand-blue text-brand-blue bg-brand-blue/5"
                            : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                        }`}
                      >
                        <Code className="w-4 h-4 text-brand-blue" />
                        <span>JSON Code Editor</span>
                      </button>
                    </div>

                    {editorMode === "code" ? (
                      <div className="space-y-4 bg-slate-900 p-5 rounded-2xl shadow-inner border border-slate-800">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                            <Code className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                            <span>JSON page configuration schema</span>
                          </span>
                          {jsonError ? (
                            <span className="text-red-400 text-[10px] font-black uppercase tracking-wider bg-red-950/40 px-2 py-0.5 rounded border border-red-900/30">
                              ⚠️ Invalid Syntax
                            </span>
                          ) : (
                            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-wider bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/30">
                              ✓ Valid JSON
                            </span>
                          )}
                        </div>
                        <textarea
                          value={jsonCode}
                          onChange={(e) => {
                            const val = e.target.value;
                            setJsonCode(val);
                            try {
                              const parsed = JSON.parse(val);
                              setPageData(parsed);
                              setJsonError(null);
                            } catch (err) {
                              setJsonError(err.message);
                            }
                          }}
                          className="w-full h-[600px] bg-slate-950 text-emerald-400 font-mono text-xs p-4.5 rounded-xl focus:outline-none border border-slate-800 focus:border-brand-blue resize-y shadow-inner leading-relaxed"
                          spellCheck="false"
                        />
                        {jsonError && (
                          <div className="p-3 bg-red-950/40 border border-red-900/30 rounded-xl text-red-300 font-mono text-[10px]">
                            {jsonError}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-6">
                    
                    {/* Drag-and-Drop Elements Library */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-4.5 space-y-3 shadow-sm">
                      <h3 className="font-extrabold text-slate-900 text-xs flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-brand-blue" />
                        <span>Wix Blocks Library (Drag &amp; Drop / Click)</span>
                      </h3>
                      <p className="text-[10px] text-slate-500">Drag any block from the list below and drop it into the Section Manager area, or simply click a card to add it with a custom title instantly.</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          draggable="true"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/plain", "layout:standard");
                            e.dataTransfer.effectAllowed = "copy";
                          }}
                          onClick={() => addSectionOfLayout("standard")}
                          className="p-3 bg-slate-50 border border-slate-200 hover:border-brand-orange hover:bg-slate-100 rounded-xl text-center cursor-grab active:cursor-grabbing text-[11px] font-bold text-slate-700 transition-all select-none hover:shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Type className="w-3.5 h-3.5 text-slate-400" />
                          <span>Text-Only Block</span>
                        </div>
                        <div
                          draggable="true"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/plain", "layout:image-right");
                            e.dataTransfer.effectAllowed = "copy";
                          }}
                          onClick={() => addSectionOfLayout("image-right")}
                          className="p-3 bg-slate-50 border border-slate-200 hover:border-brand-orange hover:bg-slate-100 rounded-xl text-center cursor-grab active:cursor-grabbing text-[11px] font-bold text-slate-700 transition-all select-none hover:shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Image className="w-3.5 h-3.5 text-slate-400" />
                          <span>Media Right Block</span>
                        </div>
                        <div
                          draggable="true"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/plain", "layout:image-left");
                            e.dataTransfer.effectAllowed = "copy";
                          }}
                          onClick={() => addSectionOfLayout("image-left")}
                          className="p-3 bg-slate-50 border border-slate-200 hover:border-brand-orange hover:bg-slate-100 rounded-xl text-center cursor-grab active:cursor-grabbing text-[11px] font-bold text-slate-700 transition-all select-none hover:shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Image className="w-3.5 h-3.5 text-slate-400" />
                          <span>Media Left Block</span>
                        </div>
                        <div
                          draggable="true"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/plain", "layout:full-width");
                            e.dataTransfer.effectAllowed = "copy";
                          }}
                          onClick={() => addSectionOfLayout("full-width")}
                          className="p-3 bg-slate-50 border border-slate-200 hover:border-brand-orange hover:bg-slate-100 rounded-xl text-center cursor-grab active:cursor-grabbing text-[11px] font-bold text-slate-700 transition-all select-none hover:shadow-sm flex items-center justify-center gap-1.5"
                        >
                          <Megaphone className="w-3.5 h-3.5 text-slate-400" />
                          <span>Full-Width Banner</span>
                        </div>
                      </div>
                    </div>

                    {/* Hero Input Area */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-4 shadow-sm">
                      <h3 className="font-extrabold text-slate-900 text-xs border-b border-slate-100 pb-2 flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-brand-blue" />
                        <span>Hero Section Settings</span>
                      </h3>
                      
                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase mb-1">Page Hero Title</label>
                        <input
                          type="text"
                          value={pageData.title}
                          onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase mb-1">Badge Subheading</label>
                        <input
                          type="text"
                          value={pageData.subtitle}
                          onChange={(e) => setPageData({ ...pageData, subtitle: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase mb-1">Intro/Description Block</label>
                        <textarea
                          rows={3}
                          value={pageData.intro}
                          onChange={(e) => setPageData({ ...pageData, intro: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-xs font-medium"
                        />
                      </div>
                    </div>

                    {/* Metrics Editor */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-4 shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <h3 className="font-extrabold text-slate-900 text-xs flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-brand-blue" />
                          <span>Layout Highlights/Metrics</span>
                        </h3>
                        <button
                          onClick={addMetric}
                          className="px-2.5 py-1 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded-lg text-[10px] font-black uppercase flex items-center gap-1 hover:bg-brand-orange/25"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Key</span>
                        </button>
                      </div>

                      {pageData.metrics.length === 0 ? (
                        <p className="text-slate-500 text-[11px] text-center py-2">No key metrics loaded for this path.</p>
                      ) : (
                        <div className="space-y-2">
                          {pageData.metrics.map((metric, idx) => (
                            <div key={idx} className="flex gap-2 items-end bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                              <div className="w-24">
                                <label className="block text-[8px] uppercase text-slate-500 mb-0.5">Value</label>
                                <input
                                  type="text"
                                  value={metric.value}
                                  onChange={(e) => updateMetric(idx, "value", e.target.value)}
                                  className="w-full px-2 py-1 rounded bg-white border border-slate-200 text-slate-800 text-[11px] font-bold focus:outline-none focus:border-brand-blue"
                                />
                              </div>                              <div className="flex-1">
                                <label className="block text-[8px] uppercase text-slate-500 mb-0.5">Label Description</label>
                                <input
                                  type="text"
                                  value={metric.label}
                                  onChange={(e) => updateMetric(idx, "label", e.target.value)}
                                  className="w-full px-2 py-1 rounded bg-white border border-slate-200 text-slate-800 text-[11px] font-semibold focus:outline-none focus:border-brand-blue"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => deleteMetric(idx)}
                                className="p-2 bg-red-50 text-red-600 border border-red-100 rounded hover:bg-red-100 text-[10px] flex items-center justify-center shrink-0"
                                title="Delete metric"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Section blocks Dropzone Area */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-slate-900 text-xs flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-brand-blue" />
                          <span>Section Manager</span>
                        </h3>
                        <button
                          onClick={addSection}
                          className="px-2.5 py-1.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/10 rounded-lg text-[10px] font-black uppercase hover:bg-brand-blue/25 flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Section</span>
                        </button>
                      </div>

                      {/* Dropzone wrapper for library drop */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDropOnList(e, null)}
                        className={`transition-all duration-300 min-h-[150px] space-y-4 rounded-2xl p-2 border border-dashed ${
                          isDragOverDropzone
                            ? "bg-slate-100 border-brand-orange scale-102"
                            : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        {pageData.sections.length === 0 ? (
                          <div className="p-8 text-center text-slate-500 text-xs">
                            No sections configured. Drag blocks here or click "+ Add Section".
                          </div>
                        ) : (
                          pageData.sections.map((sect, idx) => (
                            <div
                              key={idx}
                              draggable="true"
                              onDragStart={(e) => handleDragStart(e, idx)}
                              onDragOver={(e) => e.preventDefault()}
                              onDragEnd={handleDragEnd}
                              onDrop={(e) => handleDropOnList(e, idx)}
                              className={`bg-white border rounded-2xl p-4 relative space-y-3 cursor-grab active:cursor-grabbing transition-all duration-200 ${
                                draggedIdx === idx
                                  ? "border-brand-orange bg-slate-50 opacity-55 scale-98 shadow-inner"
                                  : "border-slate-200 hover:border-slate-350 shadow-sm"
                              }`}
                            >
                              {/* Section Header Controls */}
                              <div className="flex items-center justify-between border-b border-slate-150 pb-2">
                                <div className="flex items-center gap-2">
                                  <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                                    Section #{idx + 1} ({sect.layout_type || "standard"})
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => moveSection(idx, -1)}
                                    disabled={idx === 0}
                                    className="p-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-600 flex items-center justify-center"
                                    title="Move Up"
                                  >
                                    <ChevronUp className="w-3 h-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => moveSection(idx, 1)}
                                    disabled={idx === pageData.sections.length - 1}
                                    className="p-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-600 flex items-center justify-center"
                                    title="Move Down"
                                  >
                                    <ChevronDown className="w-3 h-3" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => deleteSection(idx)}
                                    className="p-1 px-2.5 bg-red-50 border border-red-100 hover:bg-red-100 rounded text-[9px] text-red-650 flex items-center gap-1"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                    <span>Delete</span>
                                  </button>
                                </div>
                              </div>

                              {/* Section fields */}
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Title</label>
                                  <input
                                    type="text"
                                    value={sect.title}
                                    onChange={(e) => updateSectionField(idx, "title", e.target.value)}
                                    className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Subtitle</label>
                                  <input
                                    type="text"
                                    value={sect.subtitle || ""}
                                    onChange={(e) => updateSectionField(idx, "subtitle", e.target.value)}
                                    className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Description Paragraph</label>
                                <textarea
                                  rows={2.5}
                                  value={sect.desc || ""}
                                  onChange={(e) => updateSectionField(idx, "desc", e.target.value)}
                                  className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Image Asset URL</label>
                                  <input
                                    type="text"
                                    value={sect.image_url || ""}
                                    onChange={(e) => updateSectionField(idx, "image_url", e.target.value)}
                                    className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-mono focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    placeholder="/images/example.jpg"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">BG Video URL (Optional)</label>
                                  <input
                                    type="text"
                                    value={sect.video_url || ""}
                                    onChange={(e) => updateSectionField(idx, "video_url", e.target.value)}
                                    className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-mono focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    placeholder="https://..."
                                  />
                                </div>
                              </div>

                              {/* Button URL details for Wix customization */}
                              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-150">
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Button CTA Text</label>
                                  <input
                                    type="text"
                                    value={sect.btn_text || ""}
                                    onChange={(e) => updateSectionField(idx, "btn_text", e.target.value)}
                                    placeholder="e.g. Enquire Now"
                                    className="w-full px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Button Link Target</label>
                                  <input
                                    type="text"
                                    value={sect.btn_url || ""}
                                    onChange={(e) => updateSectionField(idx, "btn_url", e.target.value)}
                                    placeholder="e.g. /contact"
                                    className="w-full px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-150">
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Text Align</label>
                                  <select
                                    value={sect.alignment || "left"}
                                    onChange={(e) => updateSectionField(idx, "alignment", e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  >
                                    <option value="left">Left</option>
                                    <option value="center">Center</option>
                                    <option value="right">Right</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Layout Mode</label>
                                  <select
                                    value={sect.layout_type || "standard"}
                                    onChange={(e) => updateSectionField(idx, "layout_type", e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  >
                                    <option value="standard">Text Only (no media)</option>
                                    <option value="image-right">Media Right / Text Left</option>
                                    <option value="image-left">Media Left / Text Right</option>
                                    <option value="full-width">Full Width Banner</option>
                                  </select>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-150">
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Title Align</label>
                                  <select
                                    value={sect.title_align || "left"}
                                    onChange={(e) => updateSectionField(idx, "title_align", e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                  >
                                    <option value="left">Left</option>
                                    <option value="center">Center</option>
                                    <option value="right">Right</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-[8px] font-bold text-slate-500 uppercase mb-0.5">Title Text Color</label>
                                  <div className="flex gap-1.5 items-center">
                                    <input
                                      type="color"
                                      value={sect.title_color || "#0f172a"}
                                      onChange={(e) => updateSectionField(idx, "title_color", e.target.value)}
                                      className="w-7 h-7 rounded bg-slate-50 border border-slate-200 cursor-pointer shrink-0"
                                    />
                                    <input
                                      type="text"
                                      value={sect.title_color || ""}
                                      onChange={(e) => updateSectionField(idx, "title_color", e.target.value)}
                                      placeholder="Default Color"
                                      className="flex-1 px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-mono focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column removed: Preview opens in a new tab now */}
            </div>
          )}

          {/* --- TAB B: DEPARTMENTS WORKSPACE --- */}
          {activeTab === "departments" && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-slate-900">Department Curriculums &amp; HODs</h2>
                  <p className="text-slate-500 text-xs mt-0.5">Edit NBA accreditations, Intake volumes, HOD details, and syllabus contents.</p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={selectedDeptSlug}
                    onChange={handleDeptChange}
                    className="bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                  >
                    {departments.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name} ({d.code})
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleSaveDept}
                    disabled={savingDept || loadingDept}
                    className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg disabled:opacity-50 flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{savingDept ? "Saving..." : "Save Department"}</span>
                  </button>
                </div>
              </div>

              {loadingDept ? (
                <div className="py-20 text-center text-slate-500">
                  <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  Fetching department details...
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* General Stats & NBA */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-4 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 text-xs border-b border-slate-100 pb-2">Key Metadata</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Department Name</label>
                        <input
                          type="text"
                          value={deptData.name || ""}
                          onChange={(e) => setDeptData({ ...deptData, name: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Department Code</label>
                        <input
                          type="text"
                          value={deptData.code || ""}
                          onChange={(e) => setDeptData({ ...deptData, code: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Est. Year</label>
                        <input
                          type="number"
                          value={deptData.established || ""}
                          onChange={(e) => setDeptData({ ...deptData, established: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Intake Capacity</label>
                        <input
                          type="number"
                          value={deptData.intake || 0}
                          onChange={(e) => setDeptData({ ...deptData, intake: parseInt(e.target.value) || 0 })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Labs Count</label>
                        <input
                          type="number"
                          value={deptData.labs_count || 0}
                          onChange={(e) => setDeptData({ ...deptData, labs_count: parseInt(e.target.value) || 0 })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Placement Ratio</label>
                        <input
                          type="text"
                          value={deptData.placement_ratio || ""}
                          onChange={(e) => setDeptData({ ...deptData, placement_ratio: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">NBA Accreditation Status</label>
                        <select
                          value={deptData.nba_accredited ? 1 : 0}
                          onChange={(e) => setDeptData({ ...deptData, nba_accredited: parseInt(e.target.value) })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        >
                          <option value={1}>Accredited</option>
                          <option value={0}>Not Accredited</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">NBA Accreditation Validity Period</label>
                      <input
                        type="text"
                        value={deptData.nba_period || ""}
                        onChange={(e) => setDeptData({ ...deptData, nba_period: e.target.value })}
                        placeholder="e.g. Valid up to 2027-2028"
                        className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Vision Statement</label>
                      <textarea
                        rows={3}
                        value={deptData.vision || ""}
                        onChange={(e) => setDeptData({ ...deptData, vision: e.target.value })}
                        className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  {/* HOD Details & JSON Content Blocks */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-4 shadow-sm">
                    <h3 className="font-extrabold text-slate-900 text-xs border-b border-slate-100 pb-2">Head of Department (HOD)</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">HOD Name</label>
                        <input
                          type="text"
                          value={deptData.hod_name || ""}
                          onChange={(e) => setDeptData({ ...deptData, hod_name: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">HOD Designation</label>
                        <input
                          type="text"
                          value={deptData.hod_designation || ""}
                          onChange={(e) => setDeptData({ ...deptData, hod_designation: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">HOD Email</label>
                        <input
                          type="email"
                          value={deptData.hod_email || ""}
                          onChange={(e) => setDeptData({ ...deptData, hod_email: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">HOD Image URL</label>
                        <input
                          type="text"
                          value={deptData.hod_image || ""}
                          onChange={(e) => setDeptData({ ...deptData, hod_image: e.target.value })}
                          className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[11px] focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-xs border-b border-slate-100 pt-2 pb-2">Advanced Layout JSON Arrays</h3>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Mission Statements Array</label>
                        <span className="text-[9px] text-slate-500">JSON formatted array</span>
                      </div>
                      <textarea
                        rows={2}
                        value={deptData.mission_json || "[]"}
                        onChange={(e) => setDeptData({ ...deptData, mission_json: e.target.value })}
                        className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Labs Setup Array</label>
                        <span className="text-[9px] text-slate-500">JSON list of objects</span>
                      </div>
                      <textarea
                        rows={3}
                        value={deptData.labs_json || "[]"}
                        onChange={(e) => setDeptData({ ...deptData, labs_json: e.target.value })}
                        className="w-full px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* --- TAB C: GLOBAL SITE SETTINGS --- */}
          {activeTab === "settings" && (
            <div className="flex-1 overflow-y-auto p-6 flex justify-center items-start w-full">
              <div className="w-full max-w-xl bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-slate-900 mb-0.5">Global Branding &amp; Styling</h2>
                  <p className="text-slate-500 text-xs">Customize the CSS variables, brand color palettes, site logo, and global text attributes.</p>
                </div>

                <div className="space-y-5 pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Brand Blue (Primary Color)</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={settings.brand_blue}
                          onChange={(e) => setSettings({ ...settings, brand_blue: e.target.value })}
                          className="w-10 h-9 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer shrink-0"
                        />
                        <input
                          type="text"
                          value={settings.brand_blue}
                          onChange={(e) => setSettings({ ...settings, brand_blue: e.target.value })}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium font-mono focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Brand Orange (Accent Color)</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={settings.brand_orange}
                          onChange={(e) => setSettings({ ...settings, brand_orange: e.target.value })}
                          className="w-10 h-9 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer shrink-0"
                        />
                        <input
                          type="text"
                          value={settings.brand_orange}
                          onChange={(e) => setSettings({ ...settings, brand_orange: e.target.value })}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium font-mono focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Brand Cyan (Hover/Details)</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={settings.brand_cyan}
                          onChange={(e) => setSettings({ ...settings, brand_cyan: e.target.value })}
                          className="w-10 h-9 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer shrink-0"
                        />
                        <input
                          type="text"
                          value={settings.brand_cyan}
                          onChange={(e) => setSettings({ ...settings, brand_cyan: e.target.value })}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium font-mono focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">Brand Purple (Highlights)</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={settings.brand_purple}
                          onChange={(e) => setSettings({ ...settings, brand_purple: e.target.value })}
                          className="w-10 h-9 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer shrink-0"
                        />
                        <input
                          type="text"
                          value={settings.brand_purple}
                          onChange={(e) => setSettings({ ...settings, brand_purple: e.target.value })}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium font-mono focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Site Title Branding</label>
                    <input
                      type="text"
                      value={settings.site_name}
                      onChange={(e) => setSettings({ ...settings, site_name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Site Logo URL</label>
                    <input
                      type="text"
                      value={settings.site_logo || ""}
                      onChange={(e) => setSettings({ ...settings, site_logo: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue font-mono"
                      placeholder="/logo.png"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Site Footer Copyright</label>
                    <input
                      type="text"
                      value={settings.site_footer_text}
                      onChange={(e) => setSettings({ ...settings, site_footer_text: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                    />
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                        Navbar Navigation Menu
                      </label>
                      <button
                        type="button"
                        onClick={addTopNavLink}
                        className="px-2 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/15 hover:bg-brand-blue/20 rounded-md text-[9px] font-black uppercase flex items-center gap-1"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        <span>Add Menu Link</span>
                      </button>
                    </div>

                    <div className="space-y-3.5 max-h-[350px] overflow-y-auto pr-1">
                      {navItems.map((item, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 relative">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                              Item #{idx + 1}
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => moveTopNavLink(idx, -1)}
                                disabled={idx === 0}
                                className="p-0.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-600 flex items-center justify-center"
                              >
                                <ChevronUp className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => moveTopNavLink(idx, 1)}
                                disabled={idx === navItems.length - 1}
                                className="p-0.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-600 flex items-center justify-center"
                              >
                                <ChevronDown className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteTopNavLink(idx)}
                                className="p-0.5 bg-red-50 hover:bg-red-105 text-red-650 rounded flex items-center justify-center border border-red-100"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Label</label>
                              <input
                                type="text"
                                value={item.name}
                                onChange={(e) => handleNavChange(idx, "name", e.target.value)}
                                className="w-full px-2 py-1.5 rounded bg-white border border-slate-200 text-slate-800 text-[11px] font-semibold focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">URL Link</label>
                              <input
                                type="text"
                                value={item.href}
                                onChange={(e) => handleNavChange(idx, "href", e.target.value)}
                                className="w-full px-2 py-1.5 rounded bg-white border border-slate-200 text-slate-800 text-[11px] font-mono focus:outline-none"
                              />
                            </div>
                          </div>

                          {/* Submenu links */}
                          <div className="pl-3 border-l-2 border-slate-200 space-y-2 pt-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] font-bold text-slate-400 uppercase">Submenu Links</span>
                              <button
                                type="button"
                                onClick={() => addSubNavLink(idx)}
                                className="text-[8px] font-black uppercase text-brand-orange hover:underline flex items-center gap-0.5"
                              >
                                <Plus className="w-2 h-2" />
                                <span>Add Sub-Link</span>
                              </button>
                            </div>

                            {item.submenu && item.submenu.map((sub, sidx) => (
                              <div key={sidx} className="flex gap-2 items-center bg-white p-2 rounded-xl border border-slate-150">
                                <div className="flex-1 grid grid-cols-2 gap-1.5">
                                  <input
                                    type="text"
                                    value={sub.name}
                                    placeholder="Sub-label"
                                    onChange={(e) => handleSubnavChange(idx, sidx, "name", e.target.value)}
                                    className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-semibold focus:outline-none"
                                  />
                                  <input
                                    type="text"
                                    value={sub.href}
                                    placeholder="/subpage"
                                    onChange={(e) => handleSubnavChange(idx, sidx, "href", e.target.value)}
                                    className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-mono focus:outline-none"
                                  />
                                </div>
                                <div className="flex items-center gap-0.5">
                                  <button
                                    type="button"
                                    onClick={() => moveSubNavLink(idx, sidx, -1)}
                                    disabled={sidx === 0}
                                    className="p-0.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-600"
                                  >
                                    <ChevronUp className="w-2.5 h-2.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => moveSubNavLink(idx, sidx, 1)}
                                    disabled={sidx === item.submenu.length - 1}
                                    className="p-0.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-600"
                                  >
                                    <ChevronDown className="w-2.5 h-2.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => deleteSubNavLink(idx, sidx)}
                                    className="p-0.5 bg-red-50 hover:bg-red-100 text-red-650 rounded border border-red-50"
                                  >
                                    <Trash2 className="w-2.5 h-2.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                          At a Glance Directory Grid
                        </label>
                        <p className="text-[9px] text-slate-400 font-semibold mt-0.5">Customize homepage categories and grid cards.</p>
                      </div>
                      <button
                        type="button"
                        onClick={addGlimpseCategory}
                        className="px-2 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/15 hover:bg-brand-blue/20 rounded-md text-[9px] font-black uppercase flex items-center gap-1"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        <span>Add Category</span>
                      </button>
                    </div>

                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                      {Object.keys(glimpsesObj).map((catName) => (
                        <div key={catName} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
                            <span className="text-[10px] font-black text-slate-800 uppercase tracking-wider">
                              Category: {catName}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => addGlimpseCard(catName)}
                                className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange border border-brand-orange/15 hover:bg-brand-orange/20 rounded text-[9px] font-black uppercase flex items-center gap-0.5"
                              >
                                <Plus className="w-2 h-2" />
                                <span>Add Card</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteGlimpseCategory(catName)}
                                className="p-0.5 bg-red-50 hover:bg-red-100 text-red-650 rounded border border-red-50"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2.5">
                            {glimpsesObj[catName] && glimpsesObj[catName].map((card, cidx) => (
                              <div key={cidx} className="bg-white p-3 rounded-xl border border-slate-200 space-y-2 relative">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                                  <span className="text-[9px] font-bold text-slate-400">Card #{cidx + 1}</span>
                                  <div className="flex items-center gap-0.5">
                                    <button
                                      type="button"
                                      onClick={() => moveGlimpseCard(catName, cidx, -1)}
                                      disabled={cidx === 0}
                                      className="p-0.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-655"
                                    >
                                      <ChevronUp className="w-2.5 h-2.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => moveGlimpseCard(catName, cidx, 1)}
                                      disabled={cidx === glimpsesObj[catName].length - 1}
                                      className="p-0.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-slate-655"
                                    >
                                      <ChevronDown className="w-2.5 h-2.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => deleteGlimpseCard(catName, cidx)}
                                      className="p-0.5 bg-red-50 hover:bg-red-100 text-red-650 rounded border border-red-50"
                                    >
                                      <Trash2 className="w-2.5 h-2.5" />
                                    </button>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Card Title</label>
                                    <input
                                      type="text"
                                      value={card.title}
                                      onChange={(e) => handleGlimpseCardChange(catName, cidx, "title", e.target.value)}
                                      className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-semibold focus:outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Link Target URL</label>
                                    <input
                                      type="text"
                                      value={card.href}
                                      onChange={(e) => handleGlimpseCardChange(catName, cidx, "href", e.target.value)}
                                      className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-mono focus:outline-none"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Card Description</label>
                                  <textarea
                                    rows={1.5}
                                    value={card.desc}
                                    onChange={(e) => handleGlimpseCardChange(catName, cidx, "desc", e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] focus:outline-none"
                                  />
                                </div>

                                <div>
                                  <label className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Icon Key</label>
                                  <select
                                    value={card.icon || "eye"}
                                    onChange={(e) => handleGlimpseCardChange(catName, cidx, "icon", e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-[10px] focus:outline-none font-semibold"
                                  >
                                    <option value="eye">Eye (Vision/Mission)</option>
                                    <option value="calendar">Calendar (Milestones)</option>
                                    <option value="award">Award (Achievements)</option>
                                    <option value="file">File (Approvals/Circulars)</option>
                                    <option value="users">Users (Governing Council)</option>
                                    <option value="user">User (Chairman)</option>
                                    <option value="book">Book (Principal/Academics)</option>
                                    <option value="building">Building (Dean/Facilities)</option>
                                    <option value="star">Star (Capabilities)</option>
                                    <option value="handshake">Handshake (MoUs/Placements)</option>
                                    <option value="sports">Sports (Gymnasium)</option>
                                  </select>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSaveSettings}
                    disabled={savingSettings}
                    className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white font-extrabold text-xs uppercase tracking-widest transition-colors shadow-lg disabled:opacity-50 mt-4 flex items-center justify-center gap-1.5"
                  >
                    <Save className="w-4 h-4" />
                    <span>{savingSettings ? "Applying Changes..." : "Publish Style Changes"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* --- ADD NEW PAGE MODAL DIALOG --- */}
      {isAddPageOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white border border-slate-200 p-6 rounded-3xl shadow-2xl relative">
            <h3 className="text-base font-extrabold text-slate-900 mb-2">Create New Dynamic Page</h3>
            <p className="text-slate-500 text-xs mb-4">Select a category prefix and enter a slug to build a new dynamic path.</p>

            <form onSubmit={handleCreateNewPage} className="space-y-4">
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">Category Route Prefix</label>
                <select
                  value={newPageCategory}
                  onChange={(e) => setNewPageCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                >
                  <option value="about">about (e.g. /about/your-slug)</option>
                  <option value="academics">academics (e.g. /academics/your-slug)</option>
                  <option value="campus-life">campus-life (e.g. /campus-life/your-slug)</option>
                  <option value="research">research (e.g. /research/your-slug)</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">Page Slug (URL)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. green-campus"
                  value={newPageSlug}
                  onChange={(e) => setNewPageSlug(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none placeholder-slate-400 font-mono focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">Page Title Label</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eco-Friendly Green Campus"
                  value={newPageTitle}
                  onChange={(e) => setNewPageTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none placeholder-slate-400 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddPageOpen(false)}
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue/95 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Initialize Page</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
