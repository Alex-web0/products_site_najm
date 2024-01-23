import type { Translation } from "./interfaces/base_translation";
import { ar } from "./translations/ar";
import { en } from "./translations/en";
import { fr } from "./translations/fr";

export const SITE_BLANKET = "SITE_BLANKET";
export const SAYA_EMAIL = "saya.org.ngo@gmail.com";
export const DEFAULT_LOCALE = "ar";

export function siteMapToggler(
  blanketElement: HTMLElement,
  onClicked: () => void
) {
  function toggleSheet() {
    try {
      blanketElement!.classList.toggle("hidden");
      setTimeout(() => {
        blanketElement!.classList.toggle("opacity-0");
        blanketElement!.classList.toggle("opacity-60");
      }, 3);
    } catch (e) {
      console.log(e);
    }
  }

  toggleSheet();

  function handleSheetClicked() {
    toggleSheet();
    onClicked();
    blanketElement?.removeEventListener("click", handleSheetClicked);
  }

  blanketElement?.addEventListener("click", handleSheetClicked);
}

interface SiteDestinatons {
  home: string;
  activities: string;
  contact: string;
  donate: string;
}

export function generateDestinationFromLocale(
  locale?: string
): SiteDestinatons {
  const l =
    typeof locale === "undefined" || locale == DEFAULT_LOCALE
      ? ""
      : locale + "/";

  return {
    home: `/${l}#`,
    activities: `/${l}#activities`,
    contact: `/${l}#contact`,
    donate: `/${l}#donate`,
  };
}

export function getTranslationByStringLocale(l: string): Translation {
  if (l == "fr") {
    return fr;
  } else if (l == "ar") {
    return ar;
  }

  return en;
}
