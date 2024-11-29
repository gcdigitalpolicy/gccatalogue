"use client";

import { Container } from "@/components/layout/Container";
import { GcdsHeading, GcdsLink } from "@cdssnc/gcds-components-react-ssr";

export default function NotFound() {
  return (
    <Container>
      <div className="my-12">
        <GcdsHeading tag="h1" size="h1">
          404 - Page not found | Page introuvable
        </GcdsHeading>

        <div className="mt-8">
          <div className="mb-6">
            <GcdsHeading tag="h2" size="h3">English</GcdsHeading>
            <p className="mb-4">We cannot find the page you are looking for. The page might have:</p>
            <ul className="list-disc ml-8 mb-4">
              <li>moved to a new location</li>
              <li>been archived or deleted</li>
              <li>never existed (wrong URL)</li>
            </ul>
            <p>What you can do:</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Check the web address for typos</li>
              <li>Go back to the <GcdsLink href="/">homepage</GcdsLink></li>
              <li>Use the navigation menu to find what you're looking for</li>
            </ul>
          </div>

          <div className="mt-8">
            <GcdsHeading tag="h2" size="h3">Français</GcdsHeading>
            <p className="mb-4">Nous ne trouvons pas la page que vous cherchez. La page pourrait :</p>
            <ul className="list-disc ml-8 mb-4">
              <li>avoir été déplacée</li>
              <li>avoir été archivée ou supprimée</li>
              <li>ne jamais avoir existé (mauvaise URL)</li>
            </ul>
            <p>Ce que vous pouvez faire :</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Vérifier l'adresse Web pour des erreurs de frappe</li>
              <li>Retourner à la <GcdsLink href="/">page d'accueil</GcdsLink></li>
              <li>Utiliser le menu de navigation pour trouver ce que vous cherchez</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
