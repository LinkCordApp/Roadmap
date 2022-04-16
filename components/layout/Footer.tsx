import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {

  return (
    <>
      <br />
      <br />
      <br />{" "}
      <footer className="bg-header w-full flex mx-auto relative" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <span>
                <img
                  src="/LinkCordBanner.webp"
                  className="favicon w-1920 h-1090 transform:rotate(360deg)"
                  draggable={false}
                  alt="LinkCordLogo"
                />
                <a href="https://www.producthunt.com/posts/link-cord?utm_source=badge-review&utm_medium=badge&utm_souce=badge-link&#0045;cord#discussion-body" target="_blank">
                  <img src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=341545&theme=dark" alt="Link&#0032;Cord - Free&#0032;Centralized&#0032;solution&#0032;for&#0032;all&#0032;your&#0032;Link&#0032;in&#0032;Bio&#0032;needs&#0033; | Product Hunt" className="h-25 w-64" /></a>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                    ℹ️ INFO
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href={"https://linkcord.bio/about"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fas", "info-circle"]}
                            className="mr-2"
                          />
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://linkcord.bio/about#our-team"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fas", "users"]}
                            className="mr-2"
                          />
                          Our Team
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                    👤 USER
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href={"https://linkcord.bio/dashboard"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fas", "user-circle"]}
                            className="mr-2"
                          />
                          Dashboard
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://linkcord.bio/settings"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fas", "user-cog"]}
                            className="mr-2"
                          />
                          Settings
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                    📫 SUPPORT
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href={"https://discord.gg/C3ZuXPP7Hc"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fab", "discord"]}
                            className="mr-2"
                          />
                          Discord
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://twitter.com/LinkCord"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fab", "twitter"]}
                            className="mr-2"
                          />
                          Twitter
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                    ⚖️ LEGAL
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href={"https://linkcord.bio/terms"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fas", "gavel"]}
                            className="mr-2"
                          />
                          Terms
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://linkcord.bio/privacy"}>
                        <a className="text-white hover:text-linkcord">
                          <FontAwesomeIcon
                            icon={["fas", "book"]}
                            className="mr-2"
                          />
                          Privacy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
                  🧠 MISC
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href={"https://linkcord.bio/status"}>
                      <a className="text-white hover:text-linkcord">
                        <FontAwesomeIcon
                          icon={["fas", "chart-bar"]}
                          className="mr-2"
                        />
                        Status
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://linkcord.bio/blog"}>
                      <a className="text-white hover:text-linkcord">
                        <FontAwesomeIcon
                          icon={["fas", "book"]}
                          className="mr-2"
                        />
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-12 border-t border-slate-850">
            <p className="mt-4 font-semibold text-center text-white">
              © {new Date().getFullYear()} Link Cord - All rights reserved.
            </p>
            <p className="mt-4 font-semibold text-center text-white">
              <FontAwesomeIcon icon={["fas", "power-off"]} className="mr-2" />
              Powered by{" "}
              <a
                className="text-linkcord hover:text-secondary"
                href="https://vercel.com"
              >
                Vercel
              </a>{" "}
              and{" "}
              <a
                className="text-linkcord hover:text-secondary"
                href="https://nextjs.org/m"
              >
                NextJS
              </a>
            </p>
            <br />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;