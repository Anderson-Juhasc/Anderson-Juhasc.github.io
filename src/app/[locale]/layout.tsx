import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Roboto, Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import ClientLayoutEffects from "@/components/ClientLayoutEffects";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: light, regular, bold, etc.
  variable: "--font-roboto", // optional CSS variable
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const baseUrl = "https://andersonjuhasc.com";

  const alternates = routing.locales.reduce(
    (acc, locale) => {
      acc[locale] =
        locale === "en"
          ? baseUrl // root for English
          : `${baseUrl}/${locale}`; // /pt, /es, etc.
      return acc;
    },
    {} as Record<string, string>,
  );

  return {
    metadataBase: new URL("https://andersonjuhasc.com"),
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: "https://andersonjuhasc.com",
      siteName: "Anderson Juhasc",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: t("locale"), // dynamically set with locale if needed
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: ["/og-image.jpg"],
    },
    robots: "index, follow",
    alternates: {
      canonical: baseUrl,
      languages: alternates,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  await setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anderson Juhasc",
              jobTitle: "Full-stack Developer & Web Designer",
              url: "https://andersonjuhasc.com",
              email: "anderson.juhasc@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sao Paulo",
                addressCountry: "BR",
              },
              sameAs: [
                "https://github.com/anderson-juhasc",
                "https://linkedin.com/in/andersonjuhasc",
              ],
              description: t("description"),
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ClientLayoutEffects />
      </body>
    </html>
  );
}
