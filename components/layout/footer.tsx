import Link from "next/link";

import Container from "./container";

const footerLinks = {
  Shop: ["Products", "Collections"],
  Company: ["About", "Contact"],
  Support: ["Help Center", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-semibold">ShopStack</h2>
            <p className="mt-4 max-w-xs text-sm text-neutral-600">
              Curated essentials for modern living.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold">{title}</h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 transition-colors hover:text-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} ShopStack. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}