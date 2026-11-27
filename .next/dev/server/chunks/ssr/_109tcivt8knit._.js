module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
;
const SITE_URL = "https://goa.sn";
const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "GIE Opportunité d’Afrique — Construisons ensemble",
        template: "%s — GIE Opportunité d’Afrique"
    },
    description: "Coopération, investissement et innovation : le GIE Opportunité d’Afrique rassemble les ambitions pour un développement économique durable et inclusif en Afrique.",
    keywords: [
        "GIE Opportunité d’Afrique",
        "Afrique",
        "développement économique",
        "coopération",
        "investissement",
        "innovation",
        "agriculture",
        "maritime",
        "technologies",
        "commerce"
    ],
    authors: [
        {
            name: "GIE Opportunité d’Afrique",
            url: SITE_URL
        }
    ],
    creator: "GIE Opportunité d’Afrique",
    publisher: "GIE Opportunité d’Afrique",
    category: "Économie",
    alternates: {
        canonical: "/"
    },
    openGraph: {
        title: "GIE Opportunité d’Afrique",
        description: "L’Afrique des opportunités se construit ensemble. Coopération, investissement et innovation au service d’un développement durable et inclusif.",
        url: SITE_URL,
        siteName: "GIE Opportunité d’Afrique",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/images/hero-poster.webp",
                width: 1200,
                height: 630,
                alt: "GIE Opportunité d’Afrique"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "GIE Opportunité d’Afrique",
        description: "L’Afrique des opportunités se construit ensemble. Coopération, investissement et innovation.",
        images: [
            "/images/hero-poster.webp"
        ]
    },
    robots: {
        index: true,
        follow: true
    },
    icons: {
        icon: "/images/logo.png",
        apple: "/images/logo.png"
    }
};
const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GIE Opportunité d’Afrique",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: "gie.oasn@gmail.com",
    description: "Groupement d’intérêt économique qui favorise la coopération, stimule les investissements et encourage l’innovation pour le développement économique et durable de l’Afrique.",
    sameAs: [
        "https://www.instagram.com/gie.oasn"
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "fr",
        "data-theme": "dark",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        dangerouslySetInnerHTML: {
                            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('gie-theme')==='light'?'light':'dark'}catch{}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(organizationJsonLd)
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_109tcivt8knit._.js.map