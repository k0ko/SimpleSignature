const template = `<table width="320" cellpadding="2" cellspacing="2" border="0"
    style="min-width: 320px; {{SIGNATURE_BACKGROUND}} border-collapse:collapse !important;font: small/0.5 Arial,sans-serif !important; line-height: .05pt !important; border-spacing: 5px !important;">
    <tbody>
        <tr data-row="name">
            <td colspan="2" style="font-family: Arial, sans-serif; font-size: 14pt; color: #0244e0; line-height: 18pt; font-weight: 700;"><p class="MsoNormal" style="margin:.05pt !important; mso-line-height-rule: exactly;"><b>{{NAME}}</b></p></td>
        </tr>
        <tr data-row="position">
            <td colspan="2" style="font-family: Arial, sans-serif; font-size: 12pt; color: #555555; line-height: 14pt; font-weight: 700;"><p class="MsoNormal" style="margin:.05pt !important; mso-line-height-rule: exactly;"><b>{{POSITION}}</b></p></td>
        </tr>
        <tr data-row="company">
            <td colspan="2" style="font-family: Arial, sans-serif; font-size: 10pt; color: #999999; line-height: 12pt;"><p class="MsoNormal" style="margin:.05pt !important; mso-line-height-rule: exactly;"><b>{{COMPANY}}</b></p></td>
        </tr>
        <tr>
            <td colspan="2"><p class="MsoNormal" style="margin:.05pt !important; line-height: 4pt; mso-line-height-rule: exactly;">&nbsp;</p></td>
        </tr>
        <tr height="32" data-row="phone">
            <td valign="middle" align="center" width="30">
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
            <td valign="middle" align="center">
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
            <td valign="middle" align="center">
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
            <td align="center" valign="middle">
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
</table>`;
const key = "simpleSignatureV1";
let logoData = "";
let backgroundMode = "transparent";
let backgroundColor = "#FFFFFF";
let activeSchemeId = "simple-blue";

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
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    phone: "+359 888 123 456",
    location: "Sofia, Bulgaria",
    email: "name@example.com",
    website: "example.com",
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

function state() {
    let s = {};
    fields.forEach((x) => (s[x.dataset.field] = x.value));
    s.backgroundMode = backgroundMode;
    s.background = backgroundColor;
    s.activeSchemeId = activeSchemeId;
    s.logoData = logoData;
    s.visible = { ...visible };
    return s;
}
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
        .replaceAll(
            "{{WEBSITE_HREF}}",
            esc(/^https?:\/\//i.test(s.website) ? s.website : "https://" + s.website)
        )
        .replaceAll('{{ICON_COLOR}}', s.iconColor)
        .replaceAll('{{CONTACT_TEXT_COLOR}}', s.contactTextColor);
    Object.keys(s.visible).forEach((key) => {
        if (!s.visible[key]) {
            h = removeRowByKey(h, key);
        }
    });
    if (s.logoData)
        h = h.replace(
            "<tbody>",
            '<tbody><tr><td colspan="2" style="padding:0 0 10pt 0"><img src="' +
            s.logoData +
            '" alt="" style="display:block;max-width:160px;max-height:55px;border:0;outline:none;text-decoration:none"></td></tr>'
        );
    return h;
}

function update() {
    let h = build();
    lightPreview.innerHTML = h;
    darkPreview.innerHTML = h;
    mobileLightPreview.innerHTML = h;
    mobileDarkPreview.innerHTML = h;
}

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
            <span class="background-custom-swatch"></span>
            <span>Custom</span>
        </button>
        <input
            type="text"
            class="background-color-picker coloris-picker"
            data-coloris
            value="#FFFFFF"
            aria-label="Custom background color"
        >
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

function renderSchemeDots() {
    document.querySelectorAll(".scheme").forEach(button => {
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

function setColorInput(field, value) {
    const input = document.querySelector(`[data-field="${field}"]`);
    if (!input) return;

    input.value = value;

    const picker = input
        .closest(".color-control")
        ?.querySelector(".coloris-picker");

    if (picker) {
        picker.value = value;
        picker.dispatchEvent(new Event("input", { bubbles: true }));
    }
}

function applyScheme(id) {
    const scheme = schemes[id];
    if (!scheme) return;

    activeSchemeId = id;

    setColorInput("nameColor", scheme.nameColor);
    setColorInput("positionColor", scheme.positionColor);
    setColorInput("companyColor", scheme.companyColor);
    setColorInput("iconColor", scheme.iconColor);
    setColorInput("contactTextColor", scheme.contactTextColor);

    document.querySelectorAll(".scheme").forEach(button => {
        button.classList.toggle("active", button.dataset.scheme === id);
    });

    schemeDropdownUI?.refresh();
    update();
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
function clearLogo() {
    logoData = "";
    logoFile.value = "";
    logoName.textContent = "No file selected";
    logoRemove.classList.remove("show");
    update();
}
function readLogo(f) {
    if (!f || !/^image\/(png|jpeg|gif|webp)$/.test(f.type)) return;
    let r = new FileReader();
    r.onload = () => {
        logoData = r.result;
        logoName.textContent = f.name;
        logoRemove.classList.add("show");
        update();
    };
    r.readAsDataURL(f);
}
logoChoose.onclick = () => logoFile.click();
logoFile.onchange = (e) => readLogo(e.target.files[0]);
logoRemove.onclick = clearLogo;
logoDrop.ondragover = (e) => {
    e.preventDefault();
    logoDrop.classList.add("is-drag");
};
logoDrop.ondragleave = () => logoDrop.classList.remove("is-drag");
logoDrop.ondrop = (e) => {
    e.preventDefault();
    logoDrop.classList.remove("is-drag");
    readLogo(e.dataTransfer.files[0]);
};

function saveData() {
    localStorage.setItem(key, JSON.stringify(state()));
    localStorage.setItem(key + ":saved", "1");

    status.textContent = "Saved locally.";
    statusDesk.textContent = "Saved locally.";
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

    clearLogo();

    status.textContent = "Reset to default.";
    statusDesk.textContent = "Reset to default.";
}
async function copyData() {
    const h = build();
    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                "text/html": new Blob([h], { type: "text/html" }),
                "text/plain": new Blob([lightPreview.innerText], { type: "text/plain" }),
            }),
        ]);
        status.textContent = "Signature copied.";
        statusDesk.textContent = "Signature copied.";
    } catch (e) {
        status.textContent = "Copy is not available in this browser.";
        statusDesk.textContent = "Copy is not available in this browser.";
    }
}
saveDesk.onclick = saveData;
resetDesk.onclick = resetData;
copyDesk.onclick = copyData;
mobilePreviewToggle.onclick = () => {
    mobileBackdrop.classList.add("open");
    mobilePreviewToggle.classList.add("open");
};
function closePreview() {
    mobileBackdrop.classList.remove("open");
    mobilePreviewToggle.classList.remove("open");
}
closeSheet.onclick = closePreview;
mobileBackdrop.onclick = (e) => {
    if (e.target === mobileBackdrop) closePreview();
};

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
        hex.value = picker.value;
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
try {
    const wasExplicitlySaved = localStorage.getItem(key + ":saved") === "1";
    let saved = wasExplicitlySaved
        ? JSON.parse(localStorage.getItem(key))
        : null;
    if (saved) {
        if (saved.visible) {
            Object.assign(visible, saved.visible);
        }
        fields.forEach((x) => {
            if (saved[x.dataset.field] !== undefined) x.value = saved[x.dataset.field];
        });
        if (saved.background) {
            setBackgroundColor(saved.background);
        }
        setBg(saved.backgroundMode || "transparent");
        if (saved.logoData) {
            logoData = saved.logoData;
            logoName.textContent = "Saved logo";
            logoRemove.classList.add("show");
        }

        if (saved.activeSchemeId && schemes[saved.activeSchemeId]) {
            activeSchemeId = saved.activeSchemeId;
        }
    }
    applyScheme(activeSchemeId);
} catch (e) { }

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
        theme: 'large',
        themeMode: 'dark',
        alpha: false,
        format: 'hex',
        swatches: ['#0B63CE', '#007C91', '#16824B', '#6D43C6', '#C23865', '#B65D00', '#B4233C', '#3F536B', '#4F46E5', '#0F766E', '#334155', '#FFFFFF']
    });

    document.querySelectorAll('.coloris-picker').forEach((picker) => {
        picker.addEventListener('input', () => {
            const hex = picker.parentElement.querySelector('input[data-field$="Color"]');
            if (!hex) return;
            hex.value = picker.value;
            hex.dispatchEvent(new Event('input', { bubbles: true }));
            update();
        });
    });
}
document.querySelectorAll(".background-color-picker[data-coloris]").forEach((picker) => {
    picker.value = backgroundColor;

    picker.addEventListener("change", () => {
        if (/^#[0-9a-f]{6}$/i.test(picker.value)) {
            setBackgroundColor(picker.value);
        }
    });
});
document.querySelectorAll('.coloris-picker').forEach((picker) => {
    const hex = picker.parentElement.querySelector('input[data-field$="Color"]');
    if (!hex) return;

    picker.value = hex.value;

    // Кара Coloris да прочете текущата default стойност от input-а
    picker.dispatchEvent(new Event('input', { bubbles: true }));
});
/* Custom dropdown UI: options keep their existing handlers and logic. */
function makeCustomDropdown(source, type) {
    if (!source || source.parentElement.classList.contains('custom-dropdown')) return null;
    const wrap = document.createElement('div');
    wrap.className = `custom-dropdown ${type}-dropdown`;
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = `custom-dropdown-trigger ${type}-trigger`;
    trigger.setAttribute('aria-expanded', 'false');
    const menu = document.createElement('div');
    menu.className = 'custom-dropdown-menu';
    source.parentNode.insertBefore(wrap, source);
    wrap.append(trigger, menu);
    menu.appendChild(source);
    const refresh = () => {
        trigger.innerHTML = '';
        if (type === 'scheme') {
            const active = source.querySelector('.scheme.active') || source.querySelector('.scheme');
            if (active) trigger.appendChild(active.cloneNode(true));
        } else {
            const active = source.querySelector('.dot.active');
            const custom = source.querySelector('.background-custom.active');
            const swatch = document.createElement('span'); swatch.className = 'selected-swatch';
            swatch.style.background = active ? active.dataset.color : (backgroundColor || '#FFFFFF');
            trigger.appendChild(swatch);
            const label = document.createElement('span'); label.textContent = custom ? 'Custom' : (active ? active.title : 'Select color');
            trigger.appendChild(label);
        }
    };
    trigger.addEventListener('click', () => {
        if (type === 'background' && backgroundMode !== 'color') return;
        document.querySelectorAll('.custom-dropdown.is-open').forEach(x => { if (x !== wrap) x.classList.remove('is-open'); });
        wrap.classList.toggle('is-open'); trigger.setAttribute('aria-expanded', wrap.classList.contains('is-open'));
    });
    source.addEventListener('click', (e) => {
        if (e.target.closest('.scheme, .dot, .background-custom')) setTimeout(() => { wrap.classList.remove('is-open'); refresh(); }, 0);
    });
    return { wrap, refresh };
}
const schemeDropdownUI = makeCustomDropdown(document.querySelector('.scheme-grid'), 'scheme');
const backgroundDropdownUI = makeCustomDropdown(document.querySelector('.background-colors'), 'background');
document.addEventListener('click', (e) => { if (!e.target.closest('.custom-dropdown')) document.querySelectorAll('.custom-dropdown.is-open').forEach(x => x.classList.remove('is-open')); });
setBg(backgroundMode);
const originalSetBackgroundColor = setBackgroundColor;
setBackgroundColor = function (color) { originalSetBackgroundColor(color); backgroundDropdownUI?.refresh(); };
const originalSetBg = setBg;
setBg = function (mode) { originalSetBg(mode); backgroundDropdownUI?.wrap.classList.toggle('is-disabled', mode !== 'color'); };
schemeDropdownUI?.refresh();
backgroundDropdownUI?.refresh();
;
function makeSizeDropdown(select) {
    if (!select || select.closest(".custom-dropdown")) return;

    const dropdown = document.createElement("div");
    dropdown.className = "custom-dropdown scheme-dropdown";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "custom-dropdown-trigger";

    const value = document.createElement("span");
    value.className = "custom-dropdown-value";
    value.textContent = select.value;

    const chevron = document.createElement("span");
    chevron.className = "custom-dropdown-chevron";

    trigger.append(value, chevron);

    const menu = document.createElement("div");
    menu.className = "custom-dropdown-menu";

    [...select.options].forEach((option) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "custom-dropdown-option";
        item.textContent = option.textContent;
        item.dataset.value = option.value;

        if (option.value === select.value) {
            item.classList.add("active");
        }

        item.addEventListener("click", () => {
            select.value = option.value;
            select.dispatchEvent(new Event("change", { bubbles: true }));

            value.textContent = option.textContent;

            menu.querySelectorAll(".custom-dropdown-option").forEach((button) => {
                button.classList.toggle(
                    "active",
                    button.dataset.value === option.value
                );
            });

            dropdown.classList.remove("is-open");
        });

        menu.appendChild(item);
    });

    trigger.addEventListener("click", () => {
        document.querySelectorAll(".custom-dropdown.is-open").forEach((openDropdown) => {
            if (openDropdown !== dropdown) {
                openDropdown.classList.remove("is-open");
            }
        });

        dropdown.classList.toggle("is-open");
    });

    select.parentNode.insertBefore(dropdown, select);
    dropdown.append(trigger, menu, select);
    select.hidden = true;
}

document.querySelectorAll('select[data-field$="Size"]').forEach(makeSizeDropdown);

document.addEventListener("click", (event) => {
    if (!event.target.closest(".custom-dropdown")) {
        document.querySelectorAll(".custom-dropdown.is-open").forEach((dropdown) => {
            dropdown.classList.remove("is-open");
        });
    }
});

