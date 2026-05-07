// Static UI (no backend). Data here drives the UI.

// Matches the original site WhatsApp link:
// `https://wa.me/00966551953000`
const WHATSAPP_PHONE = "00966551953000";

const SOCIALS = {
  x: "https://twitter.com/AtlasElevators?s=20",
  instagram: "https://www.instagram.com/atlas_ksa/",
  snapchat: "https://www.snapchat.com/add/atlas_ksa",
  youtube: "https://www.youtube.com/@atlaslifts3697",
};

const categories = [
  {
    id: "panorama",
    title: "بانورما",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/17_lritzfefqu.jpg",
  },
  {
    id: "passenger",
    title: "مصاعد الركاب",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/16_bhktyffnks.jpg",
  },
  {
    id: "goods",
    title: "مصاعد البضائع",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/15_dpjqsisoem.jpg",
  },
  {
    id: "special",
    title: "مصاعد ذوي الاحتياجات الخاصة",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/11_lcocxtwqsj.jpg",
  },
  {
    id: "escalators",
    title: "سلالم متحركة",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/2_xltngedrud.png",
  },
];

const products = [
  {
    id: "e7",
    title: "Elevator 7",
    category: "panorama",
    tag: "جديد",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/17_lritzfefqu.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 1,
  },
  {
    id: "e6",
    title: "Elevator 6",
    category: "passenger",
    tag: "الأحدث",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/16_bhktyffnks.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 2,
  },
  {
    id: "e5",
    title: "Elevator 5",
    category: "goods",
    tag: "مميز",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/15_dpjqsisoem.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 3,
  },
  {
    id: "e4",
    title: "Elevator 4",
    category: "passenger",
    tag: "مميز",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/14_sfgghquful.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 4,
  },
  {
    id: "e3",
    title: "Elevator 3",
    category: "panorama",
    tag: "مميز",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/13_rnfmmufork.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 5,
  },
  {
    id: "e2",
    title: "Elevator 2",
    category: "special",
    tag: "مميز",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/12_manwddjflx.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 6,
  },
  {
    id: "ladder",
    title: "Electric ladder",
    category: "escalators",
    tag: "منتج",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/2_xltngedrud.png",
    desc: "سلالم/منتجات كهربائية (واجهة فقط).",
    featuredRank: 7,
  },
  {
    id: "e1",
    title: "Elevator 1",
    category: "passenger",
    tag: "مميز",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/11_lcocxtwqsj.jpg",
    desc: "مثال منتج من الموقع (واجهة فقط).",
    featuredRank: 8,
  },
];

const galleryItems = [
  {
    id: "g1",
    title: "مشروع 1",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/17_lritzfefqu.jpg",
  },
  {
    id: "g2",
    title: "مشروع 2",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/16_bhktyffnks.jpg",
  },
  {
    id: "g3",
    title: "مشروع 3",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/14_sfgghquful.jpg",
  },
  {
    id: "g4",
    title: "مشروع 4",
    imageUrl: "https://www.atlaslifts-sa.net/contents/products/0/13_rnfmmufork.jpg",
  },
];

const mediaItems = [
  {
    id: "m1",
    title: "حفل إدراج شركة مصاعد أطلس للتجارة العامة والمقاولات",
    text: "خبر/إعلان — واجهة عرض ثابتة بدون نظام إدارة محتوى.",
  },
  {
    id: "m2",
    title: "اعتماد الجودة والسلامة",
    text: "نلتزم بمعايير السلامة والأمن وفق اللوائح المعتمدة.",
  },
  {
    id: "m3",
    title: "خدمة ما بعد البيع",
    text: "متابعة وتطوير مستمر لرضا العملاء.",
  },
];

const state = {
  selectedCategory: "all",
  query: "",
  sort: "featured",
};

function $(sel) {
  return document.querySelector(sel);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return ch;
    }
  });
}

function waLink(text) {
  const digits = String(WHATSAPP_PHONE).replace(/[^\d]/g, "");
  const q = new URLSearchParams();
  if (text) q.set("text", text);
  const qs = q.toString();
  return qs ? `https://wa.me/${digits}?${qs}` : `https://wa.me/${digits}`;
}

function setLinks() {
  // socials
  const map = [
    ["#xLink", SOCIALS.x],
    ["#igLink", SOCIALS.instagram],
    ["#snapLink", SOCIALS.snapchat],
    ["#ytLink", SOCIALS.youtube],
    ["#xLinkFooter", SOCIALS.x],
    ["#igLinkFooter", SOCIALS.instagram],
    ["#snapLinkFooter", SOCIALS.snapchat],
    ["#ytLinkFooter", SOCIALS.youtube],
  ];
  for (const [id, url] of map) {
    const a = $(id);
    if (!a) continue;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  }

  // whatsapp anchors
  const wa = waLink("مرحبًا، أحتاج استفسار عن مصاعد أطلس.");
  const waIds = ["#waFab", "#waLinkInline", "#waLinkFooter", "#waCtaTop", "#waCtaAbout"];
  for (const id of waIds) {
    const a = $(id);
    if (!a) continue;
    a.href = wa;
    a.target = "_blank";
    a.rel = "noopener";
  }
}

function renderCategorySelect() {
  const sel = $("#categorySelect");
  if (!sel) return;
  sel.innerHTML =
    `<option value="all">الكل</option>` +
    categories.map((c) => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.title)}</option>`).join("");
  sel.value = state.selectedCategory;
}

function renderCategories() {
  const root = $("#categoriesGrid");
  if (!root) return;
  root.innerHTML = categories
    .map(
      (c) => `
      <a class="cat-card" href="#products" data-cat="${escapeHtml(c.id)}" aria-label="${escapeHtml(
        c.title,
      )}">
        <div class="cat-card__media">
          <img src="${escapeHtml(c.imageUrl)}" alt="${escapeHtml(c.title)}" loading="lazy" />
          <div class="cat-card__title"><span>${escapeHtml(c.title)}</span></div>
          <div class="cat-card__ribbon">
            <span>تصفح</span>
            <span class="cat-card__play" aria-hidden="true">▶</span>
          </div>
        </div>
      </a>
    `,
    )
    .join("");

  root.addEventListener("click", (e) => {
    const a = e.target.closest("[data-cat]");
    if (!a) return;
    const id = a.getAttribute("data-cat") || "all";
    setCategory(id);
  });
}

function getVisibleProducts() {
  const q = state.query.trim().toLowerCase();
  let list = products.slice();

  if (state.selectedCategory !== "all") {
    list = list.filter((p) => p.category === state.selectedCategory);
  }
  if (q) {
    list = list.filter((p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }

  switch (state.sort) {
    case "titleAsc":
      list.sort((a, b) => a.title.localeCompare(b.title, "ar"));
      break;
    default:
      list.sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));
      break;
  }
  return list;
}

function productCard(p) {
  const catTitle = categories.find((c) => c.id === p.category)?.title ?? "منتج";
  const wa = waLink(`مرحبًا، أريد استفسار عن: ${p.title}`);
  return `
    <article class="product">
      <div class="product__media">
        <img src="${escapeHtml(p.imageUrl)}" alt="${escapeHtml(p.title)}" loading="lazy" />
        <div class="product__tag">${escapeHtml(p.tag || catTitle)}</div>
      </div>
      <div class="product__body">
        <h3 class="product__title">${escapeHtml(p.title)}</h3>
        <p class="product__desc">${escapeHtml(p.desc)}</p>
        <div class="product__foot">
          <div class="actions">
            <a class="btn btn--soft" href="${escapeHtml(wa)}" target="_blank" rel="noopener">واتساب</a>
            <a class="btn btn--primary" href="#contact">طلب تركيب</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const root = $("#productsGrid");
  if (!root) return;
  const list = getVisibleProducts();
  root.innerHTML = list.map(productCard).join("") || `<p class="muted">لا يوجد نتائج.</p>`;
}

function renderGallery() {
  const root = $("#galleryGrid");
  if (!root) return;
  root.innerHTML = galleryItems
    .map(
      (g) => `
      <article class="gallery-card">
        <div class="gallery-card__media">
          <img src="${escapeHtml(g.imageUrl)}" alt="${escapeHtml(g.title)}" loading="lazy" />
        </div>
        <div class="gallery-card__body">
          <div style="font-weight:900">${escapeHtml(g.title)}</div>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderMedia() {
  const root = $("#mediaGrid");
  if (!root) return;
  root.innerHTML = mediaItems
    .map(
      (m) => `
      <article class="media-card">
        <div class="media-card__body">
          <h3 class="media-card__title">${escapeHtml(m.title)}</h3>
          <p class="media-card__text">${escapeHtml(m.text)}</p>
        </div>
      </article>
    `,
    )
    .join("");
}

function setCategory(id) {
  state.selectedCategory = id || "all";
  const sel = $("#categorySelect");
  if (sel) sel.value = state.selectedCategory;
  renderProducts();
}

function setupFilters() {
  const q = $("#query");
  const sel = $("#categorySelect");
  const sort = $("#sortSelect");

  q?.addEventListener("input", () => {
    state.query = q.value || "";
    renderProducts();
  });
  sel?.addEventListener("change", () => setCategory(sel.value));
  sort?.addEventListener("change", () => {
    state.sort = sort.value;
    renderProducts();
  });
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = `الاسم: ${name}\nالإيميل: ${email}\nالجوال: ${phone}\nالموضوع: ${subject}\n\n${message}`;
    window.open(waLink(text), "_blank", "noopener");
  });
}

function setupSearchModal() {
  const modal = $("#searchModal");
  const openBtn = $("#openSearch");
  const closeBtn = $("#closeSearch");
  const backdrop = modal?.querySelector("[data-close]");
  const modalQuery = $("#modalQuery");
  const applyBtn = $("#applyModalQuery");

  const open = () => {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    setTimeout(() => modalQuery?.focus(), 0);
  };
  const close = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  const apply = () => {
    const value = (modalQuery?.value || "").trim();
    if (!value) return;
    const mainQuery = $("#query");
    if (mainQuery) mainQuery.value = value;
    state.query = value;
    renderProducts();
    close();
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  applyBtn?.addEventListener("click", apply);
  modalQuery?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    apply();
  });
}

function init() {
  setLinks();
  renderCategorySelect();
  renderCategories();
  setupFilters();
  renderProducts();
  renderGallery();
  renderMedia();
  setupContactForm();
  setupSearchModal();
}

document.addEventListener("DOMContentLoaded", init);

