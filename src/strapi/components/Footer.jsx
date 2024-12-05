import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#101228] text-white py-10 footer">
      <div className="max-w-[1675px] w-full mx-auto p-5">
        <div className="row flex flex-wrap justify-between">
          <div className="block_newsletter col-lg-6 col-12">
            <div className="flex flex-wrap justify-between">
              <div className="col-md-6 flex flex-col lg:flex-row gap-5">
                <div
                  id="block_myaccount_infos"
                  className="col-lg-3 links wrapper"
                >
                  <a
                    href="#footer_account_list"
                    className="footer__title--mobile footer__title"
                    data-toggle=""
                    aria-expanded="true"
                  >
                    Twoje konto
                  </a>
                  <ul
                    className="account-list  show"
                    data--hide-mobile=""
                    id="footer_account_list"
                    style={{}}
                  >
                    <li>
                      <a
                        href="https://piw.pl/dane-osobiste"
                        title="Dane osobowe"
                        rel="nofollow"
                      >
                        Dane osobowe
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://piw.pl/historia-zamowien"
                        title="Zamówienia"
                        rel="nofollow"
                      >
                        Zamówienia
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://piw.pl/potwierdzenie-zwrotu"
                        title="Moje pokwitowania - korekty płatności"
                        rel="nofollow"
                      >
                        Moje pokwitowania - korekty płatności
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://piw.pl/adresy"
                        title="Adresy"
                        rel="nofollow"
                      >
                        Adresy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://piw.pl/kupony"
                        title="Kupony"
                        rel="nofollow"
                      >
                        Kupony
                      </a>
                    </li>
                    <li>
                      <a
                        href="//piw.pl/module/ps_emailalerts/account"
                        title="Moje powiadomienia"
                      >
                        Moje powiadomienia
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="block-contact col-lg-3 w-full">
                  <p className="footer__title footer__title--desktop">
                    Informacja o sklepie
                  </p>

                  <div
                    id="footer_store_info"
                    className="account-list text-sm  show lg:max-w-[175px]"
                    data--hide-mobile=""
                    style={{}}
                  >
                    Państwowy Instytut Wydawniczy
                    <br />
                    Foksal 17
                    <br />
                    00-372 Warszawa
                    <br />
                    Polska
                    <br />
                    Zadzwoń do nas: <span>22 826 02 01</span>
                    <br />
                    Napisz do nas:{" "}
                    <a href="mailto:kontakt@piw.pl" className="dropdown">
                      kontakt@piw.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-sharing text-right flex flex-col items-start  pt-4 gap-2">
            <p className="footer-header text-xl">Social media</p>
            <div className="flex gap-5">
              <a
                className="social-btn facebook"
                href="https://www.facebook.com/panstwowyinstytutwydawniczy/"
                target="_blank"
                rel="nofollow noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="27.001"
                  height="26.837"
                  viewBox="0 0 27.001 26.837"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_247"
                        data-name="Rectangle 247"
                        width="27.001"
                        height="26.837"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_421"
                    data-name="Group 421"
                    transform="translate(0 -0.002)"
                  >
                    <g
                      id="Group_420"
                      data-name="Group 420"
                      transform="translate(0 0.002)"
                      clipPath="url(#clip-path)"
                    >
                      <path
                        id="Path_256"
                        data-name="Path 256"
                        d="M13.5,0a13.5,13.5,0,0,0-2.109,26.837V17.4H7.963V13.5h3.428V10.528c0-3.384,2.016-5.253,5.1-5.253a20.761,20.761,0,0,1,3.022.264V8.862h-1.7a1.951,1.951,0,0,0-2.2,2.108V13.5h3.744l-.6,3.9H15.61v9.434A13.5,13.5,0,0,0,13.5,0"
                        transform="translate(0 -0.002)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                className="social-btn instagram"
                href="https://www.instagram.com/explore/tags/pa%C5%84stwowyinstytutwydawniczy/"
                target="_blank"
                rel="nofollow noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.843"
                  height="26.865"
                  viewBox="0 0 26.843 26.865"
                >
                  <g id="Group_2" data-name="Group 2" transform="translate(0)">
                    <g id="Component_11_1" data-name="Component 11 – 1">
                      <path
                        id="Path_19"
                        data-name="Path 19"
                        d="M-1152.307,30.554c1.535.02,3.138.03,4.741.064a12.554,12.554,0,0,1,3.147.373,6.892,6.892,0,0,1,5.136,5.326,11.267,11.267,0,0,1,.3,2.634c.022,3.066.038,6.132.03,9.2a15.649,15.649,0,0,1-.292,3.378,6.943,6.943,0,0,1-3.6,4.862,7.589,7.589,0,0,1-3.217.888c-1.645.083-3.293.123-4.94.136-1.939.016-3.879,0-5.818-.032a15.084,15.084,0,0,1-3.125-.3,6.917,6.917,0,0,1-4.88-3.695,8.157,8.157,0,0,1-.827-3.03c-.15-1.655-.141-3.315-.141-4.974,0-1.587-.015-3.173.014-4.759.02-1.1.058-2.2.168-3.289a7.357,7.357,0,0,1,1.5-3.883,7.125,7.125,0,0,1,4.433-2.609,15.406,15.406,0,0,1,2.626-.231C-1155.491,30.584-1153.933,30.574-1152.307,30.554Zm.207,24.48c1.688-.042,3.632-.079,5.576-.143a5.918,5.918,0,0,0,2.359-.548,4.549,4.549,0,0,0,2.562-3.393,14.146,14.146,0,0,0,.223-2.778q.033-3.624.019-7.247a24.864,24.864,0,0,0-.177-3.507,5.224,5.224,0,0,0-.786-2.2,4.545,4.545,0,0,0-3.317-2.009,21.139,21.139,0,0,0-2.713-.19q-4.405-.024-8.811.024a13.705,13.705,0,0,0-2.089.2,4.54,4.54,0,0,0-2.953,1.712,4.912,4.912,0,0,0-.983,2.556c-.1.929-.158,1.867-.162,2.8-.013,2.758,0,5.515.024,8.273a11.188,11.188,0,0,0,.265,2.6,4.467,4.467,0,0,0,2.651,3.221,6.97,6.97,0,0,0,2.608.512C-1155.989,54.97-1154.173,54.994-1152.1,55.034Z"
                        transform="translate(1165.797 -30.554)"
                        fill="#fff"
                      />
                      <path
                        id="Path_20"
                        data-name="Path 20"
                        d="M-1090.865,98.651a6.911,6.911,0,0,1-6.756,6.89,6.9,6.9,0,0,1-7.042-6.895,6.927,6.927,0,0,1,6.752-6.9A6.908,6.908,0,0,1-1090.865,98.651Zm-2.422-.025a4.474,4.474,0,0,0-4.384-4.454,4.471,4.471,0,0,0-4.569,4.474,4.487,4.487,0,0,0,4.386,4.474A4.474,4.474,0,0,0-1093.287,98.626Z"
                        transform="translate(1111.199 -85.204)"
                        fill="#fff"
                      />
                      <path
                        id="Path_21"
                        data-name="Path 21"
                        d="M-984.872,75.783a1.612,1.612,0,0,1-1.617,1.611,1.611,1.611,0,0,1-1.6-1.607,1.606,1.606,0,0,1,1.609-1.617A1.606,1.606,0,0,1-984.872,75.783Z"
                        transform="translate(1007.092 -69.507)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                className="social-btn pinterest"
                href="https://pinterest.com"
                target="_blank"
                rel="nofollow noopener"
              >
                <svg
                  id="pngfuel.com-24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="26.721"
                  height="26.721"
                  viewBox="0 0 26.721 26.721"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      d="M256 31C131.9 31 31 131.9 31 256s100.9 225 225 225 225-100.9 225-225S380.1 31 256 31zm0 419.9c-20.1 0-39.5-3.1-57.7-8.7 7.9-12.9 19.9-34.2 24.2-51.1 2.4-9.1 12.1-46.3 12.1-46.3 6.3 12.1 25 22.4 44.6 22.4 58.8 0 101.2-54.1 101.2-121.3 0-64.4-52.6-112.6-120.1-112.6-84.1 0-128.8 56.5-128.8 118 0 28.6 15.2 64.2 39.5 75.5 3.7 1.8 5.6 1 6.5-2.6.6-2.7 4-15.9 5.5-22.1.4-1.9.3-3.7-1.3-5.6-8.1-9.8-14.5-27.8-14.5-44.5 0-43 32.5-84.6 88-84.6 47.9 0 81.4 32.6 81.4 79.3 0 52.7-26.6 89.3-61.3 89.3-19.2 0-33.5-15.8-28.8-35.2 5.5-23.2 16.2-48.2 16.2-64.9 0-14.9-8-27.4-24.7-27.4-19.6 0-35.2 20.2-35.2 47.4 0 17.2 5.8 28.9 5.8 28.9s-19.4 81.6-22.9 96.9c-4 16.9-2.4 40.5-.7 55.9C112.4 409.1 61 338.7 61 256c0-107.7 87.3-194.9 194.9-194.9s195 87.3 195 194.9S363.6 451 256 450.9z"
                    />
                  </svg>
                </svg>
              </a>
              <a
                className="social-btn youtube"
                href="https://www.youtube.com/channel/UCsqS-ZgNndM7nxCJz4Bskbw"
                target="_blank"
                rel="nofollow noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.843"
                  height="18.726"
                  viewBox="0 0 26.843 18.726"
                >
                  <path
                    id="Path_23"
                    data-name="Path 23"
                    d="M1190.672,36.9c-1.146,0-2.292.007-3.438,0-.689-.006-1.377-.033-2.065-.057q-.752-.026-1.5-.068c-.478-.027-.956-.054-1.432-.1-.677-.068-1.358-.128-2.028-.243a2.808,2.808,0,0,1-1.312-.679,3.387,3.387,0,0,1-1.127-1.853,11.485,11.485,0,0,1-.246-1.453c-.078-.735-.113-1.474-.175-2.21-.129-1.518-.056-3.039-.053-4.558,0-.58.044-1.16.09-1.739a15.846,15.846,0,0,1,.408-2.771,3.321,3.321,0,0,1,2.051-2.35,3.649,3.649,0,0,1,1.114-.234c.558-.043,1.115-.11,1.672-.164.155-.015.31-.027.466-.034.3-.014.6-.025.9-.034.72-.023,1.441-.054,2.162-.065,1.958-.028,3.916-.054,5.873-.067.971-.006,1.943.015,2.914.028.425.006.85.02,1.274.037.485.019.97.037,1.454.068.554.036,1.108.087,1.662.131.294.023.587.05.881.068a3.753,3.753,0,0,1,2.128.694,3.316,3.316,0,0,1,1.278,2c.11.535.2,1.075.269,1.617.068.568.1,1.14.14,1.711.139,1.771.053,3.545.052,5.317a16.011,16.011,0,0,1-.128,1.867c-.085.718-.194,1.435-.339,2.143a3.3,3.3,0,0,1-.723,1.439,3.246,3.246,0,0,1-1.8,1.114,6.954,6.954,0,0,1-.888.117c-.469.049-.939.091-1.409.134-.172.016-.344.029-.516.036-.329.014-.659.024-.988.035-.676.022-1.352.049-2.028.065q-2.3.054-4.592.1Zm-3.448-5.155,8.569-4.443-8.569-4.472Z"
                    transform="translate(-1177.269 -18.21)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <a href="/bip">
              <svg
                className="bip"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={65}
                height={28}
                viewBox="0 0 65 28"
              >
                <image
                  id="bip"
                  width={65}
                  height={28}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAcCAYAAAA+59JsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE1QjRBODNFQUVCMTFFNzhFMEJFNEIwQkJDNEU0MjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE1QjRBODRFQUVCMTFFNzhFMEJFNEIwQkJDNEU0MjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTVCNEE4MUVBRUIxMUU3OEUwQkU0QjBCQkM0RTQyMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTVCNEE4MkVBRUIxMUU3OEUwQkU0QjBCQkM0RTQyMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj1EuVIAAAQgSURBVHja5Jh3aFRBEMbvLpcosQRFsYFG7ERBjQVFxRIl+IcGsYIN7GIBFcEWExURGyjWKAqCEDE2LFhRiRILdhHFILEFW+zdFL/B72Bd9+W9e3dniQM/kt3bt/ve7MzszHpP+Wt6IiA9wVJQDiwB21zO4wfpYAh4BGaCc+F+WW8ElFABXAGN2H4LmoF8F3MNAplK+zZoAz6E84V9EbACUUKc0i4PKrucq7nWrhvCXL9VCSWgSGnL/8Uu5zoEvirtE+B5uF/Y7/m7JQckg37gBVgLCiOhhIQQdusB+Oxg3Ef+FTepIbEIfGGws/uok+AOeOlwrYBUBLXpnu/AY/DJSgm9wSIXipAP6QIu2Ywr5GnRCfQA1fisrJcLDoANFoEzBqwHA8ErMBYctlmvPRjFtWpwji9UwhGwGdwwnQ4LwDwXltAOXNT6qoNroBbbxQ5izxMwG2zV+uVDjivt86CjxWb5uJnTeDRbyTt+73I9MKaCNJdBMBzBV3ZiC5iq9cdp7arcWZOsA7NsFCBSCSyjIn55wXQSaRHTLLD4bSXorrT1HS+yeG46GGfo/8a1TM+J5Q817VKaqqEwi5jhXJDI5KkryDJYzWIQHcS8dehKehxaxvgga3UAawxKXSjWZjoi5zNwzQujAiTD68tIH5DTZAX9WA1sHfmbExlCN1F3fxjYofQ9Z+y6xWPWy/540MfKX1OpuXDJWk0BqsxhOqxKtyDm1sdmaQpQZT0Trp+eLy1oTeHRFY4Mcl8pv8vZf1Drq+8w8MZwN1XZY/PMfq0d77N5+YlgY7BFmWJugeD23uaZ14b6w2naH2VwPSeJW0CifQ52cQLICEIJH7XMLIqVn12Co0q+xfFaYrCOEkPuUpokau1nPofmPB5scqgE2fXrWt8kprFWPp2k9QUSsDeGVDjGZv0xTJdNksBAqsolXxB+PZ4ppxPJ1NqtwE7QUOuXE2M7y+2ASKF0VMkk1SpSstAmNmuLAvaC1lq/pPi7tARMLHZ3MFVkMRMSL3Pz0kRe4oJmmsnc4WzGgAY8CnVZDZ7y/3sgDzRWah1JqIaz30ragrPgDF2rHmsXPX5Imn7bzc1SFC1ipEXtEJCWPOuDuQSRAidFqxYl6ZmhjTvPnS2h6zV1cWpdpRsWuLlUkRR0NO8NY20W6c9y2ekFymBDubyKbqFKaxZqbu8WcqjsglBuloroEpdtxh0DnRlUX1mMuceMMcVwVHqoxAGaMrPpMn5D7JI171us9ZD1UZI6xhuh22aTxNMvxXSr8KNEiecMp4BJ5H5xBGNSBq1DAuoVzR160UXl1GnB+wuJCzdpAQV/8notzyaYObnFWuhgXCwtao+D7NETijuUKSkLSvCH+k3/uhK+MrCquUzu/6YE+ejJzEfuen5cxN4IdpLvAgwAaZXv+2VnWecAAAAASUVORK5CYII="
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="max-w-[1675px] w-full mx-auto pt-12">
        <div className="row flex flex-col-reverse lg:flex-row text-center w-full justify-between">
          <div className="col-md-6 visible--desktop">
            <span className="copy">
              © Copyright 2024 - PIW. All rights reserved
            </span>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="/content/2-polityka-prywatnosci">Polityka prywatności</a>
            <span className="ml-2 mr-2">|</span>
            <a href="/content/3-regulamin">Regulamin sklepu</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
