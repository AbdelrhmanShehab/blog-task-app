import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],
  // The default locale to use when no locale is specified
  defaultLocale: "en",

});
