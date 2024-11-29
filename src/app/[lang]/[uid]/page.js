import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { DateModified } from "@/components/DateModified";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { uid, lang } }) {
  // TODO: Replace with your data fetching logic
  return {
    title: "Page Title",
  };
}

export default async function Page({ params: { uid, lang } }) {
  // Validate language parameter
  if (!['en-ca', 'fr-ca'].includes(lang)) {
    notFound();
  }

  // TODO: Replace with your data fetching logic
  // For now, let's simulate some valid and invalid pages
  const validPages = {
    'en-ca': ['home', 'about', 'contact'],
    'fr-ca': ['accueil', 'a-propos', 'contactez-nous']
  };

  // Check if the requested page exists
  if (!validPages[lang]?.includes(uid)) {
    notFound();
  }

  const page = {
    data: {
      title: "Page Title",
      // Add other necessary data fields
    }
  };

  const settings = {
    // Add your settings data structure
  };

  const navigation = {
    // Add your navigation data structure
  };

  // Create locales array for language switching
  const locales = [
    { lang: 'en-ca', url: uid === 'accueil' ? '/en-ca/home' : `/en-ca/${uid}`, lang_name: 'English' },
    { lang: 'fr-ca', url: uid === 'home' ? '/fr-ca/accueil' : `/fr-ca/${uid}`, lang_name: 'Français' }
  ];

  return (
    <>
      {/* <Header
        title={page.data.title}
        locales={locales}
        navigation={navigation}
        settings={settings}
      /> */}
      <main id="main">
        <Container>
          <DateModified date={new Date()} />
        </Container>
      </main>
      <Footer settings={settings} navigation={navigation} />
    </>
  );
}

export async function generateStaticParams() {
  // Generate static paths for both languages
  return [
    { lang: 'en-ca', uid: 'home' },
    { lang: 'en-ca', uid: 'about' },
    { lang: 'en-ca', uid: 'contact' },
    { lang: 'fr-ca', uid: 'accueil' },
    { lang: 'fr-ca', uid: 'a-propos' },
    { lang: 'fr-ca', uid: 'contactez-nous' }
  ];
}
