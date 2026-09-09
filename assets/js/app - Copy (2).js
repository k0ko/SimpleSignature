const template = `<table width="320" cellpadding="2" cellspacing="2" border="0"
    style="min-width: 320px; {{SIGNATURE_BACKGROUND}} border-collapse:collapse !important;font: small/0.5 Arial,sans-serif !important; line-height: .05pt !important; border-spacing: 5px !important;">
    <tbody>
    <tr>
        {{PHOTO_COLUMN}}
    <td>
    <table width="320" cellpadding="2" cellspacing="2" border="0"
    style="min-width: 320px; border-collapse:collapse !important;font: small/0.5 Arial,sans-serif !important; line-height: .05pt !important; border-spacing: 5px !important;">
    <tbody>
        <tr data-row="name">
            <td>&nbsp;</td><td colspan="2" style="font-family: Arial, sans-serif; font-size: 14pt; color: #0244e0; line-height: 18pt; font-weight: 700;"><p class="MsoNormal" style="margin:.05pt !important; mso-line-height-rule: exactly;"><b>{{NAME}}</b></p></td>
        </tr>
        <tr data-row="position">
            <td>&nbsp;</td><td colspan="2" style="font-family: Arial, sans-serif; font-size: 12pt; color: #555555; line-height: 14pt; font-weight: 700;"><p class="MsoNormal" style="margin:.05pt !important; mso-line-height-rule: exactly;"><b>{{POSITION}}</b></p></td>
        </tr>
        <tr data-row="company">
            <td>&nbsp;</td><td colspan="2" style="font-family: Arial, sans-serif; font-size: 10pt; color: #999999; line-height: 12pt;"><p class="MsoNormal" style="margin:.05pt !important; mso-line-height-rule: exactly;"><b>{{COMPANY}}</b></p></td>
        </tr>
        <tr>
            <td>&nbsp;</td><td colspan="2"><p class="MsoNormal" style="margin:.05pt !important; line-height: 4pt; mso-line-height-rule: exactly;">&nbsp;</p></td>
        </tr>
        <tr height="32" data-row="phone">
            <td>&nbsp;</td><td valign="middle" align="center" width="30">
                <table width="14" cellpadding="0" cellspacing="0"
                    style="margin: 0 auto; border-spacing:0 !important;">
                    <tbody cellpadding="0" cellspacing="0" style="border-collapse:collapse !important;">
                        <tr width="14"
                            style="display:block !important; line-height:12pt !important; font-size:0.5pt !important; overflow: hidden; border-radius: 2pt;">
                            <td width="14" align="center" valign="bottom"
                                style="margin:0in !important;margin-top:0 !important;margin-bottom:0 !important;mso-margin-top-alt:0in !important;mso-margin-bottom-alt:0in !important;padding:0 !important;width:16pt !important; min-width: 8pt;border:solid {{ICON_COLOR}} 1.5pt !important;padding:0in 0in 0in 0in !important;">
                                <p class="MsoNormal" style="margin:.05pt !important;font-size:12pt !important;font-family:Arial,sans-serif !important; mso-line-height-rule: exactly; color: {{ICON_COLOR}}"><b><span style="mso-ligatures:none !important;">.</span></b></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td valign="middle" height="22"
                style="padding:0 0 0 0 !important;line-height:normal !important;">
                <p class="MsoNormal"
                    style="margin:.05pt !important; font-size: 10pt; line-height: 14pt; color: {{CONTACT_TEXT_COLOR}};"><a href="tel:{{PHONE_HREF}}" style="color: {{CONTACT_TEXT_COLOR}};">{{PHONE}}</a></p>
            </td>
        </tr>

        <tr height="32" data-row="location">
            <td>&nbsp;</td><td valign="middle" align="center">
                <table width="9" cellpadding="0" cellspacing="0"
                    style="display: block; border-collapse:collapse !important;border-spacing:0 !important;">
                    <tbody cellpadding="0" cellspacing="0" style="border-collapse:collapse !important;">
                        <tr width="14"
                            style="display:block !important;line-height:14pt !important;font-size:.75pt !important; text-align: center;">
                            <td valign="bottom" align="center"
                                style="display:block !important;margin:0in !important;line-height:.05pt !important;margin-top:0 !important;margin-bottom:0 !important;padding:0 !important;text-align:center !important;padding:0in 0in 0in 0in !important;font: small/0.5 Arial,sans-serif !important; mso-line-height-rule: exactly;">
                                <p class="MsoNormal" style="margin:.05pt !important; display:block; line-height:8pt; color: {{ICON_COLOR}}; font-size:8.25pt !important;"><span style="mso-ligatures:none !important;">⬤</span></p>
                                <p class="MsoNormal" style="margin:.05pt !important; display:block; line-height:6pt; color: {{ICON_COLOR}}; font-size:6.25pt !important;"><span style="mso-ligatures:none !important;">|</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td valign="middle" height="22"
                style="padding:0 0 0 0 !important;line-height:normal !important;">
                <p class="MsoNormal"
                    style="margin:.05pt !important; font-size: 10pt; line-height: 14pt; color: {{CONTACT_TEXT_COLOR}};">{{LOCATION}}</p>
            </td>
        </tr>

        <tr height="32" data-row="email">
            <td>&nbsp;</td><td valign="middle" align="center">
                <table width="22" align="center" valign="middle" cellpadding="0" cellspacing="0"
                    style="display: block; border-collapse:collapse !important;font-size:.05pt !important;border-spacing:0 !important;line-height:7pt !important; text-align: center;">
                    <tbody>
                        <tr align="center" width="14" style="display: block;font-size: .05pt !important; text-align: center; border-radius: 2pt;overflow: hidden;">
                            <td width="14" height="9" align="center" valign="middle"
                                style="isplay: block;margin:0in !important;margin-top:0 !important;margin-bottom:0 !important;mso-margin-top-alt:0in !important;mso-margin-bottom-alt:0in !important;padding:0 !important;padding:0in 0in 0in 0in !important;width:14pt !important; min-width: 12pt; border:solid {{ICON_COLOR}} 1.5pt !important;font-size: .05pt !important;font-family:Arial,sans-serif !important;mso-line-height-rule: exactly;"><p class="MsoNormal" style="margin:.05pt !important;line-height:7pt;display: block; color: {{ICON_COLOR}};"><span style="font-size:5.4pt !important;mso-ligatures:none !important; white-space: nowrap !important;">╲╱</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td valign="middle" height="22"
                style="padding:0 0 0 0 !important;line-height:normal !important;">
                <p class="MsoNormal"
                    style="margin:.05pt !important; font-size: 10pt; line-height: 14pt; color: {{CONTACT_TEXT_COLOR}};"><a href="mailto:{{EMAIL}}" style="color: {{CONTACT_TEXT_COLOR}};">{{EMAIL}}</a></p>
            </td>
        </tr>

        <tr height="32" data-row="website">
            <td>&nbsp;</td><td align="center" valign="middle">
                <table cellpadding="0" cellspacing="0" border="0" width="20"
                    style="display: block; border-collapse:collapse !important;border-spacing:0 !important;">
                    <tbody>
                        <tr style="display:block !important; overflow: hidden; border-radius: 2pt; width: 20px;">
                            <td valign="middle" width="16" height="14" align="center"
                                style="border:1.5pt solid {{ICON_COLOR}} !important; min-width:12pt !important;width:12pt !important;min-height:5.5pt !important;height:5.5pt !important;line-height:6pt !important;font-size:.05pt !important;padding:0 !important;font-family:Arial,sans-serif !important;mso-line-height-rule: exactly;">
                                <p class="MsoNormal"
                                    style="margin:.05pt !important;font-size:.05pt !important;line-height:5.5pt;">
                                    <span style="display: block; font-size:0 !important;mso-ligatures:none !important;">&nbsp;</span>
                                </p>
                            </td>
                        </tr>
                        <tr style="display:block !important; overflow: hidden; border-radius: 2pt; line-height:.05pt !important;font-size: .05pt !important;">
                            <td width="16" height="2"
                                style="margin:0in !important;margin-top:0 !important;margin-bottom:0 !important;mso-margin-top-alt:0in !important;mso-margin-bottom-alt:0in !important;padding:0 !important;display:block !important;overflow:hidden !important;width:16pt !important;min-width:16pt !important;font-size:.05pt !important;line-height:.05pt !important;padding:0 !important;padding:0in 0in 0in 0in !important;font-family:Arial,sans-serif !important;mso-line-height-rule: exactly;"></p>
                            </td>
                        </tr>
                        <tr style="display:block !important; overflow: hidden; border-radius: 2pt; line-height:.05pt;font-size: .05pt !important;">
                            <td width="16" height="2"
                                style="margin:0in !important;margin-top:0 !important;margin-bottom:0 !important;mso-margin-top-alt:0in !important;mso-margin-bottom-alt:0in !important;padding:0 !important;display:block !important;overflow:hidden !important;width:15pt !important;min-width:15pt !important;background: {{ICON_COLOR}} !important;line-height:.05pt !important;font-size:.05pt !important;padding:0 !important;padding:0in 0in 0in 0in !important;font-family:Arial,sans-serif !important;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td valign="middle" height="22"
                style="padding:0 0 0 0 !important;line-height:normal !important;">
                <p class="MsoNormal"
                    style="margin:.05pt !important; font-size: 10pt; line-height: 14pt; color: {{CONTACT_TEXT_COLOR}};"><a href="{{WEBSITE_HREF}}" target="_blank" style="color: {{CONTACT_TEXT_COLOR}};">{{WEBSITE_HREF}}</a></p>
            </td>
        </tr>
    </tbody>
</table>
</td>
</tr>
</tbody>
</table>`;
const key = "simpleSignatureV1";

const DEFAULT_AVATAR = "assets/images/default_avatar.png";

let photoEnabled = true;
let photoData = DEFAULT_AVATAR;

const photoUrl = document.querySelector("#photoUrl");
const photoAdd = document.querySelector("#photoAdd");
const photoRemove = document.querySelector("#photoRemove");

let logoData = "";
let logoWidth = 0;
let logoHeight = 0;

const MAX_LOGO_WIDTH = 160;
const MAX_LOGO_HEIGHT = 55;
const MAX_SIGNATURE_LENGTH = 15000;

const logoRemove = document.querySelector("#logoRemove");
const logoUrl = document.querySelector("#logoUrl");
const logoUrlAdd = document.querySelector("#logoUrlAdd");

const migrationLink = document.querySelector("#migrationLink");
const migrationLinkWrapper = document.querySelector("#migrationLinkWrapper");

let backgroundMode = "transparent";
let backgroundColor = "#FFFFFF";
let activeSchemeId = "simple-blue";

let loadingState = true;
let applyingScheme = false;
let ignorePickerEvents = false;

const visible = {
    name: true,
    position: true,
    company: true,
    phone: true,
    location: true,
    email: true,
    website: true
};

const defaultValues = {
    name: "Jonathan Richardson",
    position: "Senior UX/UI & Front-end Developer",
    company: "Creative Digital Solutions",
    phone: "+359 888 123 456",
    location: "Sofia, Bulgaria",
    email: "jonathan.richardson@example.com",
    website: "nikolaisabev.eu",
    nameSize: "14",
    positionSize: "12",
    companySize: "10",
    nameColor: "#0B63CE",
    positionColor: "#1E3A5F",
    companyColor: "#60738A",
    iconColor: "#0B63CE",
    contactTextColor: "#1E3A5F"
};

const fields = [...document.querySelectorAll("input[data-field], textarea[data-field], select[data-field]")];

fields.forEach(field => {
    field.addEventListener("input", update);
    field.addEventListener("change", update);
});

function showToast(
    message,
    type = "success",
    icon = "i-check",
    duration = 3000
) {

    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    //toastContainer.innerHTML = "";

    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">
            <svg class="ui-icon">
                <use href="#${icon}"></use>
            </svg>
        </span>

        <span class="toast-text">
            ${message}
        </span>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {

        toast.classList.remove("show");

        toast.addEventListener("transitionend", () => {
            toast.remove();
        }, { once: true });

    }, duration);

}

const photoDisabled = document.querySelector("#photoDisabled");
const photoRow = document.querySelector(".photo-row");

photoDisabled.addEventListener("change", () => {

    photoEnabled = !photoDisabled.checked;

    photoRow.classList.toggle("is-removed", !photoEnabled);

    update();

});

function loadImage(url) {

    return new Promise((resolve, reject) => {

        try {

            const parsed = new URL(url);

            if (!["http:", "https:"].includes(parsed.protocol)) {
                throw new Error();
            }

        } catch {

            reject("invalid-url");
            return;

        }

        const img = new Image();

        img.onload = () => resolve(img);

        img.onerror = () => reject("load-error");

        img.src = url;

    });

}

function isValidHttpUrl(url) {

    try {

        const parsed = new URL(url);

        return ["http:", "https:"].includes(parsed.protocol);

    } catch {

        return false;

    }

}

photoAdd.onclick = async () => {

    const url = photoUrl.value.trim();

    if (!url) {

        showToast(
            "Please enter a photo URL.",
            "error",
            "i-close"
        );

        return;
    }

    try {

        await loadImage(url);

        photoData = url;
        photoEnabled = true;

        photoDisabled.checked = false;

        update();

    } catch (err) {

        showToast(
            err === "invalid-url"
                ? "Please enter a valid photo URL."
                : "Photo could not be loaded.",
            "error",
            "i-close"
        );

    }

};

function clearPhoto() {

    photoData = DEFAULT_AVATAR;
    photoUrl.value = "";

    photoEnabled = true;
    photoDisabled.checked = false;

    update();

}

photoRemove.onclick = clearPhoto;

function state() {
    let s = {};
    fields.forEach(field => {
        s[field.dataset.field] = field.value;
    });
    s.activeSchemeId = activeSchemeId;
    s.photoEnabled = photoEnabled;
    s.photoData = photoData;
    s.backgroundMode = backgroundMode;
    s.background = backgroundColor;
    s.logoData = logoData;
    s.logoWidth = logoWidth;
    s.logoHeight = logoHeight;
    s.visible = { ...visible };
    return s;
}

function encodeMigration(data) {

    const json = JSON.stringify(data);

    const bytes = new TextEncoder().encode(json);

    let binary = "";

    bytes.forEach(byte => {
        binary += String.fromCharCode(byte);
    });

    return btoa(binary);

}

function decodeMigration(encoded) {

    const binary = atob(encoded);

    const bytes = Uint8Array.from(
        binary,
        c => c.charCodeAt(0)
    );

    const json = new TextDecoder().decode(bytes);

    return JSON.parse(json);

}

async function migrateToDesktop() {

    const migration = {
        migrationId:
            Date.now().toString(36) +
            Math.random().toString(36).slice(2, 8),

        state: state()
    };

    const encoded = encodeMigration(migration);

    const baseUrl = new URL(location.href);
    baseUrl.hash = encoded;

    const url = baseUrl.toString();

    migrationLink.value = url;
    migrationLinkWrapper.classList.remove("hidden");

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Email Signature",
                text: "Continue editing your signature",
                url
            });

            return;

        } catch (e) {
            // cancelled
        }
    }

    try {
        await navigator.clipboard.writeText(url);

        showToast(
            "Desktop link copied.",
            "success",
            "i-copy"
        );

    } catch {

        showToast(
            "Unable to copy desktop link.",
            "error",
            "i-close"
        );

    }
}

continueDesktopBtn.addEventListener(
    "click",
    migrateToDesktop
);

function esc(v) {
    return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function removeRowByKey(html, key) {
    const holder = document.createElement('div');
    holder.innerHTML = html;

    const row = holder.querySelector(`[data-row="${key}"]`);
    if (row) row.remove();

    return holder.innerHTML;
}

function build() {
    const s = state();
    let h = template
        .replaceAll(
            "{{SIGNATURE_BACKGROUND}}",
            s.backgroundMode === "color"
                ? "background:" + s.background + " !important;"
                : ""
        )
        .replaceAll("{{NAME}}", esc(s.name))
        .replaceAll("{{POSITION}}", esc(s.position))
        .replaceAll("{{COMPANY}}", esc(s.company))
        .replace("Name Surname", esc(s.name))
        .replace("Position", esc(s.position))
        .replace("Company Name", esc(s.company))
        .replace("font-size: 14pt; color: #0244e0", "font-size: " + s.nameSize + "pt; color: " + s.nameColor)
        .replace("font-size: 12pt; color: #555555", "font-size: " + s.positionSize + "pt; color: " + s.positionColor)
        .replace("font-size: 10pt; color: #999999", "font-size: " + s.companySize + "pt; color: " + s.companyColor)
        .replaceAll("{{PHONE}}", esc(s.phone))
        .replaceAll("{{PHONE_HREF}}", encodeURIComponent(s.phone).replace(/%20/g, ""))
        .replaceAll("{{LOCATION}}", esc(s.location))
        .replaceAll("{{EMAIL}}", esc(s.email))
        .replaceAll("{{WEBSITE}}", esc(s.website))
        .replaceAll("{{PHOTO_SRC}}", esc(s.photoData))
        .replaceAll(
            "{{WEBSITE_HREF}}",
            esc(/^https?:\/\//i.test(s.website) ? s.website : "https://" + s.website)
        )
        .replaceAll('{{ICON_COLOR}}', s.iconColor)
        .replaceAll('{{CONTACT_TEXT_COLOR}}', s.contactTextColor);

    const photoColumn = s.photoEnabled
        ? `
    <td data-column="photo" valign="top">
        <div class="upload-preview">
            <img
                src="${esc(s.photoData)}"
                width="40"
                height="40"
                alt=""
                style="display:block;width:40px;height:40px;border:0;outline:none;text-decoration:none;border-radius:50%;object-fit:cover;"
            >
        </div>
    </td>`
        : "";

    h = h.replace("{{PHOTO_COLUMN}}", photoColumn);

    Object.keys(s.visible).forEach((key) => {
        if (!s.visible[key]) {
            h = removeRowByKey(h, key);
        }
    });
    if (s.logoData) {
        const logoColspan = s.photoEnabled ? 4 : 3;

        h = h.replace(
            "<tbody>",
            `<tbody>
        <tr>
            <td colspan="${logoColspan}" style="padding:0 0 10pt 0">
                <img
                    src="${esc(s.logoData)}"
                    alt=""
                    style="display:block;width:${s.logoWidth}px;height:${s.logoHeight}px;border:0;outline:none;text-decoration:none"
                >
            </td>
        </tr>`
        );
    }
    return h;
}

function updateSignatureStatus() {
    const html = build();
    const length = html.length;
    const percent = Math.min((length / MAX_SIGNATURE_LENGTH) * 100, 100);
    const copyButton = document.querySelector('#copyDesk');

    const progress = document.querySelector(".signature-status__progress");
    const count = document.querySelector(".signature-status__count");
    const message = document.querySelector(".signature-status__message");

    progress.style.width = `${percent}%`;
    count.textContent = `${length} / ${MAX_SIGNATURE_LENGTH} characters`;

    message.classList.remove("warning", "error");

    if (length > MAX_SIGNATURE_LENGTH) {
        message.textContent = "Signature exceeds the maximum supported size.";
        message.classList.add("error");
        copyButton.disabled = true;
    } else if (length > MAX_SIGNATURE_LENGTH * 0.8) {
        message.textContent = "Signature is close to the maximum supported size.";
        message.classList.add("warning");
        copyButton.disabled = false;
    } else {
        message.textContent = "Signature size is OK.";
        copyButton.disabled = false;
    }
}

function update() {

    photoUrl.addEventListener("input", update);
    logoUrl.addEventListener("input", update);

    let h = build();

    lightPreview.innerHTML = h;
    darkPreview.innerHTML = h;

    window.refreshMobilePreview?.();

    updateSignatureStatus();

    photoAdd.disabled =
        !isValidHttpUrl(photoUrl.value.trim());

    photoRemove.disabled =
        photoData === DEFAULT_AVATAR;

    logoUrlAdd.disabled =
        !isValidHttpUrl(logoUrl.value.trim());

    logoRemove.disabled =
        !logoData;
}

document.addEventListener("focusin", event => {
    const field = event.target.closest("[data-field]");
    if (!field) return;

    const fieldName = field.dataset.field;

    document
        .querySelectorAll(`.signature [data-row="${fieldName}"]`)
        .forEach(row => row.classList.add("is-highlighted"));
});

document.addEventListener("focusout", event => {
    const field = event.target.closest("[data-field]");
    if (!field) return;

    const fieldName = field.dataset.field;

    document
        .querySelectorAll(`.signature [data-row="${fieldName}"]`)
        .forEach(row => row.classList.remove("is-highlighted"));
});

function setBg(mode) {
    backgroundMode = mode;

    document.querySelectorAll("[data-bg-mode]").forEach(button => {
        button.classList.toggle("active", button.dataset.bgMode === mode);
    });

    const backgroundColors = document.querySelector(".background-colors");
    const backgroundDropdown = backgroundColors?.closest(".custom-dropdown");

    backgroundColors?.classList.toggle("is-disabled", mode !== "color");
    backgroundDropdown?.classList.toggle("is-disabled", mode !== "color");

    if (mode !== "color") {
        backgroundDropdown?.classList.remove("is-open");
    }

    backgroundDropdownUI?.refresh();

    update();
}

const backgroundPalette = [
    { name: "White", color: "#FFFFFF" },
    { name: "Cool White", color: "#F8FAFC" },
    { name: "Soft Gray", color: "#F1F5F9" },
    { name: "Blue Gray", color: "#EEF2F6" },
    { name: "Ivory", color: "#FFFDF8" },
    { name: "Warm White", color: "#FFF7ED" },
    { name: "Soft Yellow", color: "#FEFCE8" },

    { name: "Silver", color: "#C9D2DE" },
    { name: "Slate", color: "#8B9AAF" },
    { name: "Steel", color: "#64748B" },
    { name: "Graphite", color: "#334155" },
    { name: "Charcoal", color: "#1F2937" },

    { name: "Blue", color: "#4F7CAC" },
    { name: "Navy", color: "#2F4A68" },
    { name: "Teal", color: "#3C8D87" },
    { name: "Green", color: "#4E8A62" },
    { name: "Olive", color: "#7A8050" },

    { name: "Purple", color: "#725A9C" },
    { name: "Plum", color: "#7B5268" },
    { name: "Rose", color: "#B56B7A" },
    { name: "Brick", color: "#A9564E" },
    { name: "Terracotta", color: "#B8754B" },
    { name: "Ochre", color: "#A9823A" }
];

function renderBackgroundPalette() {
    const container = document.querySelector(".background-colors");
    if (!container) return;

    container.innerHTML = backgroundPalette.map(({ name, color }) => `
        <button
            type="button"
            class="dot"
            data-color="${color}"
            style="background:${color}"
            title="${name}"
            aria-label="${name}"
        ></button>
    `).join("") + `
        <button type="button" class="background-custom" title="Custom background color">
             <input
            type="text"
             data-field="backgroundColor"
            class="background-color-picker background-custom-swatch"
            data-coloris
            value="#FFFFFF"
            aria-label="Custom background color"
        >
            <span>Custom</span>
        </button>
    `;
}

renderBackgroundPalette();

const backgroundCustomButton = document.querySelector(".background-custom");
const backgroundColorPicker = document.querySelector(".background-color-picker");
const backgroundCustomSwatch = document.querySelector(".background-custom-swatch");

function setBackgroundColor(color) {
    backgroundColor = color;

    if (backgroundColorPicker) backgroundColorPicker.value = color;
    if (backgroundCustomSwatch) backgroundCustomSwatch.style.background = color;

    const dots = [...document.querySelectorAll(".background-colors .dot")];

    dots.forEach(dot => {
        dot.classList.toggle("active", dot.dataset.color === color);
    });

    const isPresetColor = dots.some(dot => dot.dataset.color === color);

    if (backgroundCustomButton) {
        backgroundCustomButton.classList.toggle("active", !isPresetColor);
    }

    backgroundDropdownUI?.refresh();

    update();
}

if (backgroundCustomButton && backgroundColorPicker) {
    backgroundCustomButton.addEventListener("click", () => {
        if (backgroundMode !== "color") return;

        backgroundColorPicker.focus();
        backgroundColorPicker.click();
    });

    backgroundColorPicker.addEventListener("input", () => {
        const color = backgroundColorPicker.value;

        if (!/^#[0-9a-f]{6}$/i.test(color)) return;

        setBackgroundColor(color);
        backgroundColors?.classList.remove("is-open");
    });
}

document.querySelectorAll("[data-bg-mode]").forEach(button => {
    button.addEventListener("click", () => {
        setBg(button.dataset.bgMode);
    });
});

const backgroundColors = document.querySelector(".background-colors");

document.querySelectorAll(".background-colors .dot").forEach(dot => {
    dot.addEventListener("click", () => {
        const isActive = dot.classList.contains("active");

        if (isActive) {
            backgroundColors.classList.toggle("is-open");
            return;
        }

        setBackgroundColor(dot.dataset.color);
        backgroundColors.classList.remove("is-open");
    });
});
const schemes = {
    custom: {
        nameColor: "",
        positionColor: "",
        companyColor: "",
        iconColor: "",
        contactTextColor: ""
    },
    "simple-blue": {
        nameColor: "#0B63CE",
        positionColor: "#1E3A5F",
        companyColor: "#60738A",
        iconColor: "#0B63CE",
        contactTextColor: "#334E68"
    },

    ocean: {
        nameColor: "#007C91",
        positionColor: "#155E75",
        companyColor: "#4F7E91",
        iconColor: "#008FA6",
        contactTextColor: "#264653"
    },

    emerald: {
        nameColor: "#16824B",
        positionColor: "#14532D",
        companyColor: "#4F7A61",
        iconColor: "#159957",
        contactTextColor: "#245B3A"
    },

    violet: {
        nameColor: "#6D43C6",
        positionColor: "#4C1D95",
        companyColor: "#7C6AA8",
        iconColor: "#7B4DDB",
        contactTextColor: "#4B2A73"
    },

    rose: {
        nameColor: "#C23865",
        positionColor: "#881337",
        companyColor: "#A8677C",
        iconColor: "#D04A78",
        contactTextColor: "#6F1D3A"
    },

    amber: {
        nameColor: "#B65D00",
        positionColor: "#78350F",
        companyColor: "#9A7046",
        iconColor: "#D97706",
        contactTextColor: "#6B3A12"
    },

    crimson: {
        nameColor: "#B4233C",
        positionColor: "#7F1D1D",
        companyColor: "#9B5B62",
        iconColor: "#D1374B",
        contactTextColor: "#6D2027"
    },

    graphite: {
        nameColor: "#3F536B",
        positionColor: "#1E293B",
        companyColor: "#7A899B",
        iconColor: "#526D82",
        contactTextColor: "#263545"
    },

    indigo: {
        nameColor: "#4F46E5",
        positionColor: "#312E81",
        companyColor: "#7372B2",
        iconColor: "#635BFF",
        contactTextColor: "#302B67"
    },

    teal: {
        nameColor: "#0F766E",
        positionColor: "#134E4A",
        companyColor: "#5A8580",
        iconColor: "#0D9488",
        contactTextColor: "#174E4B"
    }
};

function setActiveScheme(id) {

    activeSchemeId = id;

    document.querySelectorAll(".scheme").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.scheme === id
        );
    });

    schemeDropdownUI?.refresh();

}

function renderSchemeDots() {

    document.querySelectorAll(".scheme").forEach(button => {

        if (button.dataset.scheme === "custom") {

            const colors = [
                document.querySelector('[data-field="nameColor"]').value,
                document.querySelector('[data-field="positionColor"]').value,
                document.querySelector('[data-field="companyColor"]').value,
                document.querySelector('[data-field="iconColor"]').value,
                document.querySelector('[data-field="contactTextColor"]').value
            ];

            button.querySelectorAll(".scheme-dot").forEach((dot, index) => {
                dot.style.backgroundColor = colors[index];
            });

            return;
        }

        const scheme = schemes[button.dataset.scheme];
        if (!scheme) return;

        const colors = [
            scheme.nameColor,
            scheme.positionColor,
            scheme.companyColor,
            scheme.iconColor,
            scheme.contactTextColor
        ];

        button.querySelectorAll(".scheme-dot").forEach((dot, index) => {
            dot.style.backgroundColor = colors[index];
        });

    });

}

renderSchemeDots();

function updateColorUI(input, value) {
    console.log("updateColorUI", input.dataset.field, value);
    input.value = value;
    console.log("after assign", input.value);
    const picker = input
        .closest(".color-control")
        ?.querySelector(".coloris-picker");

    if (picker) {

        picker.value = value;

        if (picker._coloris) {
            picker._coloris.setColor(value, true);
        }
    }

    const button = input
        .closest(".color-control")
        ?.querySelector(".clr-field button");

    if (button) {
        button.style.color = value;
    }

}

function setColorInput(field, value) {
    const input = document.querySelector(`[data-field="${field}"]`);
    if (!input) return;
    updateColorUI(input, value);
}

document.querySelectorAll("[data-field]").forEach(input => {
    input.addEventListener("input", (e) => {
        if (e.target.closest('.coloris-picker')) return;

        const picker = input
            .closest(".color-control")
            ?.querySelector(".coloris-picker");

        if (picker && picker.value !== input.value) {
            picker.value = input.value;
            if (picker._coloris) {
                picker._coloris.setColor(input.value, true);
            }
        }
    });
});

function applyScheme(id) {

    console.trace("applyScheme", id);

    const scheme = schemes[id];
    if (!scheme) return;


    applyingScheme = true;

    console.log(id);
    console.log(scheme);


    setActiveScheme(id);

    setColorInput("nameColor", scheme.nameColor);
    setColorInput("positionColor", scheme.positionColor);
    setColorInput("companyColor", scheme.companyColor);
    setColorInput("iconColor", scheme.iconColor);
    setColorInput("contactTextColor", scheme.contactTextColor);

    applyingScheme = false;

    update();
}

function loadSavedScheme(saved) {

    if (saved.activeSchemeId === "custom") {

        setActiveScheme("custom");

        setColorInput("nameColor", saved.nameColor);
        setColorInput("positionColor", saved.positionColor);
        setColorInput("companyColor", saved.companyColor);
        setColorInput("iconColor", saved.iconColor);
        setColorInput("contactTextColor", saved.contactTextColor);

        update();

        return;
    }

    applyScheme(saved.activeSchemeId || "simple-blue");
}

const schemeGrid = document.querySelector(".scheme-grid");

document.querySelectorAll(".scheme").forEach(button => {
    button.addEventListener("click", () => {
        const isActive = button.classList.contains("active");

        if (isActive) {
            schemeGrid.classList.toggle("is-open");
            return;
        }

        applyScheme(button.dataset.scheme);
        schemeGrid.classList.remove("is-open");
    });
});

function setLogo(src) {

    logoData = src;

    logoWidth = MAX_LOGO_WIDTH;
    logoHeight = MAX_LOGO_HEIGHT;

    logoRemove.classList.add("show");

    update();
}

function clearLogo() {
    logoData = "";
    logoWidth = 0;
    logoHeight = 0;
    logoUrl.value = "";

    logoRemove.classList.remove("show");

    update();
}

async function readLogoUrl() {

    const url = logoUrl.value.trim();

    if (!url) {

        showToast(
            "Please enter a logo URL.",
            "error",
            "i-close"
        );

        return;
    }

    try {

        await loadImage(url);

        setLogo(url);

    } catch (err) {

        showToast(
            err === "invalid-url"
                ? "Please enter a valid logo URL."
                : "Logo could not be loaded.",
            "error",
            "i-close"
        );

    }

}

logoUrlAdd.onclick = readLogoUrl;

logoUrl.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        readLogoUrl();
    }
});

logoRemove.onclick = clearLogo;

function saveData() {
    localStorage.setItem(key, JSON.stringify(state()));
    localStorage.setItem(key + ":saved", "1");

    showToast(
        "Signature saved locally.",
        "success",
        "i-save"
    );
}
function resetData() {
    localStorage.removeItem(key);
    localStorage.removeItem(key + ":saved");

    fields.forEach(input => {
        if (defaultValues[input.dataset.field] !== undefined) {
            input.value = defaultValues[input.dataset.field];
        }
    })

    applyScheme("simple-blue");
    setBg("transparent");
    setBackgroundColor("#FFFFFF");

    Object.keys(visible).forEach(field => {
        visible[field] = true;
    });

    document.querySelectorAll(".removable").forEach(row => {
        row.classList.remove("is-removed");

        const button = row.querySelector(".remove-row");
        if (button) {
            button.textContent = "×";
            button.title = "Remove row";
        }
    });

    clearPhoto();
    clearLogo();

    if (location.hash) {
        history.replaceState(
            null,
            "",
            location.pathname + location.search
        );
    }

    showToast(
        "Signature reset.",
        "success",
        "i-reset"
    );
}
const resetModal = document.querySelector("#resetModal");
const resetModalClose = document.querySelector("#resetModalClose");
const resetModalNo = document.querySelector("#resetModalNo");
const resetModalYes = document.querySelector("#resetModalYes");

function openResetModal() {
    resetModal.classList.add("is-open");
    resetModal.setAttribute("aria-hidden", "false");
}

function closeResetModal() {
    resetModal.classList.remove("is-open");
    resetModal.setAttribute("aria-hidden", "true");
}

resetModalClose.addEventListener("click", closeResetModal);
resetModalNo.addEventListener("click", closeResetModal);

resetModalYes.addEventListener("click", () => {
    closeResetModal();
    resetData();
});

resetModal.addEventListener("click", event => {
    if (event.target === resetModal) {
        closeResetModal();
    }
});
async function copyData() {
    const h = build();

    if (h.length > MAX_SIGNATURE_LENGTH) {
        const message =
            `Signature is ${h.length} characters. Maximum allowed is ${MAX_SIGNATURE_LENGTH}.`;

        showToast(
            "Signature exceeds the supported size.",
            "warning",
            "i-warning"
        );

        return;
    }
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                "text/html": new Blob([h], { type: "text/html" }),
                "text/plain": new Blob([lightPreview.innerText], { type: "text/plain" }),
            }),
        ]);
        showToast(
            "Signature copied.",
            "success",
            "i-copy"
        );
    } catch (e) {
        console.error("Clipboard error:", e);

        showToast(
            "Copy failed.",
            "error",
            "i-close"
        );
    }
}
saveDesk.onclick = saveData;
resetDesk.onclick = openResetModal;
copyDesk.onclick = copyData;

document.querySelectorAll('input[data-field$="Color"]').forEach((hex) => {
    const wrap = document.createElement("div");
    wrap.className = "color-control";

    hex.parentNode.insertBefore(wrap, hex);
    wrap.appendChild(hex);

    const picker = document.createElement("input");
    picker.type = "text";
    picker.className = "coloris-picker";
    picker.setAttribute("data-coloris", "");
    picker.value = /^#[0-9a-f]{6}$/i.test(hex.value) ? hex.value : "#111111";

    wrap.appendChild(picker);

    picker.addEventListener("input", () => {

        console.log(
            "picker",
            loadingState,
            activeSchemeId,
            picker.value
        );

        hex.value = picker.value;

        if (!loadingState &&
            !applyingScheme &&
            activeSchemeId !== "custom") {

            setActiveScheme("custom");
        }

        const button = picker
            .closest(".clr-field")
            ?.querySelector("button");

        if (button) {
            button.style.color = picker.value;
        }

        update();

    });

    hex.addEventListener("input", () => {
        if (/^#[0-9a-f]{6}$/i.test(hex.value)) {
            picker.value = hex.value;
        }
    });
});
function addRemoveControl(field) {
    const input = document.querySelector(`[data-field="${field}"]`);
    if (!input) return;

    const row = input.closest('.identity-row') || input.closest('.contact-field');
    row.classList.add('removable');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'remove-row';
    button.textContent = '×';
    button.title = 'Remove row';

    button.addEventListener('click', () => {
        visible[field] = !visible[field];

        row.classList.toggle('is-removed', !visible[field]);
        button.textContent = visible[field] ? '×' : '+';
        button.title = visible[field] ? 'Remove row' : 'Restore row';

        update();
    });

    row.appendChild(button);
}

['name', 'position', 'company', 'phone', 'location', 'email', 'website']
    .forEach(addRemoveControl);

document.querySelectorAll('.remove-row').forEach(button => {
    const input = button.parentElement.querySelector('[data-field]');
    if (!input) return;

    const isVisible = visible[input.dataset.field] !== false;

    button.parentElement.classList.toggle('is-removed', !isVisible);
    button.textContent = isVisible ? '×' : '+';
    button.title = isVisible ? 'Remove row' : 'Restore row';
});

update()

/* Coloris: local custom picker for the visible color swatches. */
if (window.Coloris) {
    Coloris({
        el: '.coloris-picker',
        theme: 'pill',
        rtl: true,
        formatToggle: true,
        format: 'hex',
        closeButton: true,
        swatches: [
            'DarkSlateGray',
            '#2a9d8f',
            '#e9c46a',
            'coral',
            'rgb(231, 111, 81)',
            'Crimson',
            '#023e8a',
            '#0077b6',
            'hsl(194, 100%, 39%)',
            '#00b4d8',
            '#48cae4'
        ]
    });

    document.querySelectorAll('.coloris-picker').forEach((picker) => {
        picker.addEventListener('input', () => {
            const hex = picker.parentElement.querySelector('input[data-field$="Color"]');
            if (!hex) return;

            hex.value = picker.value;

            const button = picker
                .closest(".clr-field")
                ?.querySelector("button");

            if (button) {
                button.style.color = picker.value;
            }

            update();
        });
    });
}
document.querySelectorAll(".background-color-picker[data-coloris]").forEach((picker) => {
    picker.value = backgroundColor;

    picker.addEventListener("input", () => {
        if (/^#[0-9a-f]{6}$/i.test(picker.value)) {
            setBackgroundColor(picker.value);
        }
    });
});
document.querySelectorAll('.coloris-picker').forEach((picker) => {
    const hex = picker.parentElement.querySelector('input[data-field$="Color"]');
    if (!hex) return;

    picker.value = hex.value;

});

/* Custom dropdown UI: options keep their existing handlers and logic. */
function makeCustomDropdown(source, type) {
    if (!source || source.parentElement.classList.contains("custom-dropdown")) {
        return null;
    }

    const wrap = document.createElement("div");
    wrap.className = `custom-dropdown ${type}-dropdown`;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = `custom-dropdown-trigger ${type}-trigger`;
    trigger.setAttribute("aria-expanded", "false");

    const menu = document.createElement("div");
    menu.className = "custom-dropdown-menu";

    wrap.append(trigger, menu);
    source.parentNode.insertBefore(wrap, source);

    function renderElementTrigger(selector, build) {
        const active =
            source.querySelector(`${selector}.active`) ||
            source.querySelector(selector);

        trigger.innerHTML = "";

        if (build) {
            build(active);
            return;
        }

        if (active) {
            console.log(active);
            console.log(active.dataset.scheme);
            console.log(active.innerHTML);
            trigger.innerHTML = active.innerHTML;
        }
    }

    function renderBackgroundTrigger() {
        renderElementTrigger(".dot", active => {
            const custom = source.querySelector(".background-custom.active");

            const swatch = document.createElement("span");
            swatch.className = "selected-swatch";
            swatch.style.background =
                active?.dataset.color ??
                backgroundColor ??
                "#FFFFFF";

            const label = document.createElement("span");
            label.textContent =
                custom
                    ? "Custom"
                    : active?.title ?? "Select color";

            trigger.append(swatch, label);
            appendChevron();
        });
    }

    function renderSchemeTrigger() {

        console.log("renderSchemeTrigger:", activeSchemeId);

        const active = activeSchemeId
            ? source.querySelector(`[data-scheme="${activeSchemeId}"]`)
            : null;

        if (active) {
            trigger.innerHTML = active.innerHTML;
            appendChevron();
            return;
        }

        trigger.innerHTML = `
        <span class="scheme-dot" style="background:${document.querySelector('[data-field="nameColor"]').value}"></span>
        <span class="scheme-dot" style="background:${document.querySelector('[data-field="positionColor"]').value}"></span>
        <span class="scheme-dot" style="background:${document.querySelector('[data-field="companyColor"]').value}"></span>
        <span class="scheme-dot" style="background:${document.querySelector('[data-field="iconColor"]').value}"></span>
        <span class="scheme-dot" style="background:${document.querySelector('[data-field="contactTextColor"]').value}"></span>

        <span>Custom</span>
        
    `;
    }

    function appendChevron() {

        const chevron = document.createElement("span");
        chevron.className = "custom-dropdown-chevron";

        chevron.innerHTML = `
        <svg class="ui-icon">
            <use href="#i-chevron-down"></use>
        </svg>
    `;

        trigger.appendChild(chevron);

    }

    function renderSelectTrigger() {
        const selected = source.selectedOptions[0];
        if (!selected) return;

        const value = document.createElement("span");
        value.className = "custom-dropdown-value";
        value.textContent = selected.textContent;

        trigger.appendChild(value);
        appendChevron();
    }

    function appendSource() {
        menu.appendChild(source);
    }

    function setActiveOption(value) {
        menu.querySelectorAll(".custom-dropdown-option")
            .forEach(btn => {
                btn.classList.toggle("active", btn.dataset.value === value);
            });
    }

    function buildSelectMenu() {
        [...source.options].forEach(option => {

            const item = document.createElement("button");
            item.type = "button";
            item.className = "custom-dropdown-option";
            item.textContent = option.textContent;
            item.dataset.value = option.value;

            if (option.value === source.value) {
                item.classList.add("active");
            }

            item.addEventListener("click", () => {

                source.value = option.value;
                source.dispatchEvent(new Event("change", {
                    bubbles: true
                }));

                refresh();
                setActiveOption(option.value);

                wrap.classList.remove("is-open");
            });

            menu.appendChild(item);
        });

        source.hidden = true;
        appendSource();
    }

    const dropdownConfig = {
        scheme: {
            render: renderSchemeTrigger,
            build: appendSource
        },
        background: {
            render: renderBackgroundTrigger,
            build: appendSource
        },
        select: {
            render: renderSelectTrigger,
            build: buildSelectMenu
        }
    };

    const config = dropdownConfig[type] || {};
    config.build?.();

    function clearTrigger() {
        trigger.replaceChildren();
    }

    function refresh() {
        clearTrigger();
        config.render?.();
    }

    function isDisabled() {
        return type === "background" && backgroundMode !== "color";
    }

    function closeOtherDropdowns() {
        document
            .querySelectorAll(".custom-dropdown.is-open")
            .forEach(dropdown => {
                if (dropdown !== wrap) {
                    dropdown.classList.remove("is-open");
                }
            });
    }

    trigger.addEventListener("click", () => {

        if (isDisabled()) {
            return;
        }

        closeOtherDropdowns();

        wrap.classList.toggle("is-open");

        trigger.setAttribute(
            "aria-expanded",
            wrap.classList.contains("is-open")
        );
    });

    source.addEventListener("click", event => {

        if (event.target.closest(".scheme, .dot")) {

            setTimeout(() => {
                wrap.classList.remove("is-open");
                refresh();
            }, 0);

        }
    });

    refresh();

    return { wrap, refresh };
}
const schemeDropdownUI = makeCustomDropdown(document.querySelector('.scheme-grid'), 'scheme');
const backgroundDropdownUI = makeCustomDropdown(document.querySelector('.background-colors'), 'background');
document.addEventListener('click', (e) => { if (!e.target.closest('.custom-dropdown')) document.querySelectorAll('.custom-dropdown.is-open').forEach(x => x.classList.remove('is-open')); });
setBg(backgroundMode);
const originalSetBg = setBg;
setBg = function (mode) { originalSetBg(mode); backgroundDropdownUI?.wrap.classList.toggle('is-disabled', mode !== 'color'); };
schemeDropdownUI?.refresh();
backgroundDropdownUI?.refresh();

try {

    const wasExplicitlySaved =
        localStorage.getItem(key + ":saved") === "1";

    const saved = wasExplicitlySaved
        ? JSON.parse(localStorage.getItem(key))
        : null;

    if (saved) {

        if (saved.photoData !== undefined) {
            photoData = saved.photoData;
            photoUrl.value =
                photoData === DEFAULT_AVATAR
                    ? ""
                    : photoData;
        }

        if (saved.photoEnabled !== undefined) {
            photoEnabled = saved.photoEnabled;

            photoDisabled.checked = !photoEnabled;
            photoRow.classList.toggle(
                "is-removed",
                !photoEnabled
            );
        }

        if (saved.visible) {
            Object.assign(visible, saved.visible);
        }

        fields.forEach(field => {
            if (saved[field.dataset.field] !== undefined) {
                field.value = saved[field.dataset.field];
            }
        });

        if (saved.background) {
            setBackgroundColor(saved.background);
        }

        setBg(saved.backgroundMode || "transparent");

        if (saved.logoData) {

            logoWidth = saved.logoWidth || MAX_LOGO_WIDTH;
            logoHeight = saved.logoHeight || MAX_LOGO_HEIGHT;

            setLogo(saved.logoData);

            if (/^https?:\/\//i.test(logoData)) {
                logoUrl.value = logoData;
            }
        }

        console.log(saved.activeSchemeId);
        console.log(saved);

        loadSavedScheme(saved);
    }

    update();

    schemeDropdownUI.refresh();
    backgroundDropdownUI.refresh();

    loadingState = false;

} catch (e) {
    console.error(e);
}

if (location.hash.length > 1) {

    try {

        const migration = decodeMigration(
            location.hash.substring(1)
        );

        const data = migration.state;

        fields.forEach(field => {

            const key = field.dataset.field;

            if (data[key] !== undefined) {
                field.value = data[key];
            }

        });

        // Photo
        photoEnabled = data.photoEnabled;
        photoData = data.photoData;

        photoDisabled.checked = !photoEnabled;
        photoRow.classList.toggle("is-removed", !photoEnabled);

        photoUrl.value =
            photoData === DEFAULT_AVATAR
                ? ""
                : photoData;

        // Logo

        logoUrl.value = logoData || "";

        if (data.logoData) {

            setLogo(data.logoData);

            logoWidth = data.logoWidth;
            logoHeight = data.logoHeight;

            logoUrl.value = data.logoData;

        } else {
            clearPhoto();
            clearLogo();

        }
        // Rows
        Object.assign(visible, data.visible);

        // Scheme
        activeSchemeId = data.activeSchemeId || "simple-blue";
        loadSavedScheme(data);

        // Background
        setBg(data.backgroundMode || "transparent");
        setBackgroundColor(data.background || "#FFFFFF");

        schemeDropdownUI?.refresh();
        backgroundDropdownUI?.refresh();

        console.log(
            document.querySelector('[data-field="name"]').value
        );

        update();

    } catch (e) {

        console.error("Migration error:", e);

    }

}

(function () {

    if (!window.matchMedia("(max-width:920px)").matches) return;

    const previews = document.querySelector(".previews");
    const mode = document.querySelector(".mode");
    const divider = document.querySelector(".preview-divider");
    const mask = document.querySelector(".dark-mask");
    const darkPreview = document.querySelector("#darkPreview");
    const wrap = document.querySelector(".wrap");
    const logo = document.querySelector("header");
    const previewTitle = document.querySelector(".previewTitle");
    const signatureStatus = document.querySelector(".signature-status");
    let manuallyCollapsed = false;
    let previewLocked = false;

    if (!previews || !mode || !divider || !mask || !darkPreview || !wrap) return;

    /* =========================
       MOVE LOGO INTO PREVIEW
    ========================= */

    if (logo) {
        previews.prepend(logo);
    }

    if (mode) {
        mode.prepend(previewTitle);
    }

    if (mode && signatureStatus) {
        mode.parentNode.insertBefore(signatureStatus, mode);
    }

    /* =========================
       MOBILE TOGGLE
    ========================= */

    const previewToggle = document.createElement("button");

    previewToggle.type = "button";
    previewToggle.className = "preview-toggle";
    previewToggle.setAttribute("aria-label", "Toggle preview");

    previewToggle.innerHTML = `
        <span class="preview-toggle-text"></span>
        <span class="preview-toggle-icon"><svg class="ui-icon">
            <use href="#i-chevron-down"></use>
        </svg></span>
    `;

    mode.appendChild(previewToggle);


    /* =========================
       MOVE PREVIEW TO TOP
    ========================= */

    wrap.parentNode.insertBefore(previews, wrap);


    /* =========================
       COMPARE SLIDER
    ========================= */

    let dragging = false;

    function move(clientX) {

        const rect = mode.getBoundingClientRect();

        let percent = ((clientX - rect.left) / rect.width) * 100;

        percent = Math.max(0, Math.min(100, percent));

        divider.style.left = percent + "%";

        mask.style.width = (100 - percent) + "%";
        mask.style.marginLeft = percent + "%";

        darkPreview.style.transform = `translateX(-${percent}%)`;
        darkPreview.style.minWidth = `${mode.offsetWidth}px`;

    }

    move(mode.getBoundingClientRect().left + mode.offsetWidth / 2);


    /* =========================
       HEIGHTS
    ========================= */

    let expandedHeight = 0;
    const collapsedHeight = 120;


    function updateWrapHeight() {

        const viewportHeight =
            window.visualViewport
                ? window.visualViewport.height
                : window.innerHeight;

        const availableHeight =
            viewportHeight - previews.offsetHeight;

    }


    function updateExpandedHeight() {

        if (previewLocked) return;

        const table = document.querySelector(".signature table");
        if (!table) return;

        expandedHeight = Math.ceil(table.getBoundingClientRect().height);

        if (previews.classList.contains("is-collapsed")) {
            return;
        }

        mode.style.height = expandedHeight + 20 + "px";

        document.body.style.paddingTop =
            previews.offsetHeight + "px";

        updateWrapHeight();

    }

    updateExpandedHeight();

    window.refreshMobilePreview = function () {

        updateExpandedHeight();
        updateWrapHeight();

    };


    /* =========================
       HEIGHT ANIMATION
    ========================= */

    let raf = null;

    function animateHeight(from, to) {
        if (previewLocked) return;

        if (raf) cancelAnimationFrame(raf);

        const duration = 350;
        const start = performance.now();

        const headerHeight =
            previews.offsetHeight - mode.offsetHeight;

        function frame(now) {

            const t =
                Math.min((now - start) / duration, 1);

            const ease =
                t < .5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;

            const h =
                from + (to - from) * ease;

            mode.style.height = h + 20 + "px";

            document.body.style.paddingTop =
                (headerHeight + h + 20) + "px";

            updateWrapHeight();

            if (t < 1) {

                raf = requestAnimationFrame(frame);

            } else {

                mode.style.height = to + 20 + "px";

                document.body.style.paddingTop =
                    (headerHeight + to + 20) + "px";

                updateWrapHeight();

                if (to === expandedHeight) {

                    previews.classList.remove("is-collapsed");

                }

                raf = null;

            }

        }

        raf = requestAnimationFrame(frame);

    }


    /* =========================
       COLLAPSE FUNCTION
    ========================= */

    function collapsePreview(manual = false) {

        if (previewLocked) return;

        if (previews.classList.contains("is-collapsed")) return;

        manuallyCollapsed = manual;

        previews.classList.add("is-collapsed");

        animateHeight(
            expandedHeight,
            collapsedHeight
        );

    }


    function expandPreview() {

        if (previewLocked) return;

        if (manuallyCollapsed) return;

        if (previews.classList.contains("is-collapsed")) {
            previews.classList.remove("is-collapsed");
        }

        animateHeight(
            collapsedHeight,
            expandedHeight
        );

    }


    /* =========================
      SCROLL
   ========================= */

    let scrollTimer;
    let wasExpandedBeforeScroll = false;
    let isFirstScroll = true; // Флаг за първо скролване

    wrap.addEventListener("scroll", () => {

        if (previewLocked) return;

        clearTimeout(scrollTimer);

        if (isFirstScroll) {
            wasExpandedBeforeScroll = !previews.classList.contains("is-collapsed");
            isFirstScroll = false;
        }


        if (!previews.classList.contains("is-collapsed")) {
            collapsePreview(false);
        } else {

        }

        scrollTimer = setTimeout(() => {

            if (previewLocked) {
                isFirstScroll = true;
                return;
            }

            if (wasExpandedBeforeScroll) {
                expandPreview();
            }

            isFirstScroll = true;

        }, 2000);

    });


    /* =========================
       TOGGLE
    ========================= */

    previewToggle.addEventListener("click", () => {

        clearTimeout(scrollTimer);

        if (previews.classList.contains("is-collapsed")) {

            manuallyCollapsed = false;
            expandPreview();

        } else {

            collapsePreview(true);

        }

    });

    document.addEventListener("focusin", e => {

        if (
            !e.target.matches(
                'input:not([type="checkbox"]), textarea'
            )
        ) return;

        previewLocked = true;

        clearTimeout(scrollTimer);

        if (raf) {
            cancelAnimationFrame(raf);
            raf = null;
        }

        if (!e.target.matches(".mobile-input")) return;

        requestAnimationFrame(() => {

            e.target.scrollIntoView({
                block: "start",
                behavior: "instant"
            });

        });

    });

    document.addEventListener("focusout", () => {

        previewLocked = false;

        requestAnimationFrame(() => {

            updateExpandedHeight();
            updateWrapHeight();

        });

    });


    /* =========================
       COMPARE EVENTS
    ========================= */

    divider.addEventListener("pointerdown", e => {

        dragging = true;

        divider.setPointerCapture(e.pointerId);

    });

    window.addEventListener("pointermove", e => {

        if (!dragging) return;

        move(e.clientX);

    });

    window.addEventListener("pointerup", () => {

        dragging = false;

    });


    /* =========================
       RESIZE
    ========================= */

    window.addEventListener("resize", () => {

        if (previewLocked && document.activeElement?.tagName !== "SELECT") {
            return;
        }

        requestAnimationFrame(() => {

            updateExpandedHeight();
            updateWrapHeight();

        });

    });

})();


