(function () {
  "use strict";

  var rootNode = document.getElementById("home-antd-root");
  var dataNode = document.getElementById("home-page-data");

  if (!rootNode || !dataNode || !window.React || !window.ReactDOM || !window.antd) {
    return;
  }

  var pageData;
  try {
    pageData = JSON.parse(dataNode.textContent);
  } catch (error) {
    return;
  }

  var React = window.React;
  var ReactDOM = window.ReactDOM;
  var antd = window.antd;
  var iconSet = window.icons || {};
  var e = React.createElement;
  var Button = antd.Button;
  var ConfigProvider = antd.ConfigProvider;
  var Empty = antd.Empty;
  var FloatButton = antd.FloatButton;
  var List = antd.List;
  var Tag = antd.Tag;
  var Timeline = antd.Timeline;
  var Tooltip = antd.Tooltip;

  function icon(name) {
    var Icon = iconSet[name];
    return Icon ? e(Icon, { "aria-hidden": true }) : null;
  }

  function values(input) {
    return Array.isArray(input) ? input : [];
  }

  function githubUrl(value) {
    if (!value) return "";
    return /^https?:\/\//i.test(value) ? value : "https://github.com/" + value;
  }

  function RichText(props) {
    return e(props.as || "div", {
      className: props.className,
      dangerouslySetInnerHTML: { __html: props.html || "" }
    });
  }

  function SectionHeading(props) {
    return e(React.Fragment, null,
      e("p", { className: "home-section-kicker" }, props.kicker),
      e("h2", null, props.title)
    );
  }

  function Hero() {
    var author = pageData.author || {};
    var focusTags = [
      "Humanoid Robotics",
      "Vision-Language-Action",
      "World Models"
    ];

    return e("section", {
      className: "home-hero",
      style: { backgroundImage: "url(\"" + pageData.heroImage + "\")" },
      "aria-labelledby": "home-title"
    },
      e("div", { className: "home-inner home-hero__inner" },
        e("div", { className: "home-hero__copy" },
          e("p", { className: "home-kicker" }, "MPhil Researcher · Embodied AI"),
          e("h1", { id: "home-title" }, author.name || "Huarui Zhang"),
          e("p", { className: "home-hero__lead" }, "Teaching humanoid robots to move, see, and make sense of the world."),
          e("div", { className: "home-chip-row", "aria-label": "Research interests" },
            focusTags.map(function (tag) {
              return e(Tag, { className: "home-tag", key: tag }, tag);
            })
          ),
          e("div", { className: "home-actions" },
            author.email && e(Button, {
              className: "home-action home-action--primary",
              type: "primary",
              size: "large",
              icon: icon("MailOutlined"),
              href: "mailto:" + author.email
            }, "Email me"),
            author.scholar && e(Button, {
              className: "home-action",
              size: "large",
              icon: icon("ReadOutlined"),
              href: author.scholar,
              target: "_blank",
              rel: "noopener noreferrer"
            }, "Scholar"),
            author.github && e(Tooltip, { title: "GitHub" },
              e(Button, {
                className: "home-action home-action--icon",
                size: "large",
                icon: icon("GithubOutlined"),
                href: githubUrl(author.github),
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "GitHub"
              })
            )
          )
        )
      ),
      e("a", {
        className: "home-scroll-cue",
        href: "#about",
        "aria-label": "Scroll to about section"
      }, icon("ArrowDownOutlined"))
    );
  }

  function About() {
    var author = pageData.author || {};
    return e("section", { id: "about", className: "home-band home-about" },
      e("div", { className: "home-inner home-about__grid" },
        e("div", null,
          e(SectionHeading, { kicker: "About", title: "Research, with a human pulse." })
        ),
        e("div", { className: "home-about__copy" },
          values(pageData.about).map(function (paragraph, index) {
            return e("p", { key: index }, paragraph);
          }),
          e("div", { className: "home-about__meta" },
            author.employer && e("span", null, icon("BankOutlined"), author.employer),
            author.location && e("span", null, icon("EnvironmentOutlined"), author.location)
          )
        )
      )
    );
  }

  function Research() {
    var subjects = [
      {
        number: "01",
        icon: "RobotOutlined",
        title: "Humanoid Loco-Manipulation",
        copy: "Coordinated motion and interaction for capable whole-body robots."
      },
      {
        number: "02",
        icon: "EyeOutlined",
        title: "Vision-Language-Action",
        copy: "Connecting visual understanding and language to grounded robot behavior."
      },
      {
        number: "03",
        icon: "BranchesOutlined",
        title: "World Models",
        copy: "Learning predictive representations that help agents reason before they act."
      }
    ];

    return e("section", { id: "research", className: "home-band home-research" },
      e("div", { className: "home-inner" },
        e(SectionHeading, { kicker: "Research focus", title: "Building intelligence that can act." }),
        e("div", { className: "home-focus-grid" },
          subjects.map(function (subject) {
            return e("article", { key: subject.number },
              e("span", { className: "home-focus-icon" }, icon(subject.icon) || subject.number),
              e("h3", null, subject.title),
              e("p", null, subject.copy)
            );
          })
        )
      )
    );
  }

  function UpdatesContent() {
    var items = values(pageData.news);
    if (!items.length) {
      return e(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE,
        description: "New research notes are on the way."
      });
    }

    return e(Timeline, {
      items: items.map(function (item, index) {
        return {
          color: index === 0 ? "#b24844" : "#6f95a3",
          children: e("div", null,
            e("span", { className: "home-update-date" }, item.date),
            e(RichText, { html: item.text })
          )
        };
      })
    });
  }

  function Updates() {
    return e("section", { id: "news", className: "home-band home-updates" },
      e("div", { className: "home-inner home-split" },
        e("div", null,
          e(SectionHeading, { kicker: "Updates", title: "What is happening now." })
        ),
        e("div", { className: "home-data-panel" }, e(UpdatesContent))
      )
    );
  }

  function PublicationList() {
    var publications = values(pageData.publications);
    if (!publications.length) {
      return e(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE,
        description: "Research in motion. Publications will appear here."
      });
    }

    return e(List, {
      dataSource: publications,
      renderItem: function (publication) {
        return e(List.Item, { key: publication.title },
          e("article", null,
            e("div", { className: "home-publication-title" }, publication.title),
            publication.authors && e("div", { className: "home-publication-meta" }, publication.authors),
            publication.venue && e("div", { className: "home-publication-meta" }, publication.venue),
            publication.summary && e("p", { className: "home-publication-meta" }, publication.summary),
            publication.links && e("div", { className: "home-publication-links" },
              publication.links.map(function (link) {
                return e(Button, {
                  key: link.url,
                  type: "link",
                  size: "small",
                  icon: icon("LinkOutlined"),
                  href: link.url,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, link.label);
              })
            )
          )
        );
      }
    });
  }

  function Work() {
    return e("section", { id: "publications", className: "home-band home-work" },
      e("div", { className: "home-inner home-split" },
        e("div", null,
          e(SectionHeading, { kicker: "Selected work", title: "Ideas moving toward the real world." })
        ),
        e("div", { className: "home-data-panel" }, e(PublicationList))
      )
    );
  }

  function splitPeriod(value) {
    var html = String(value || "");
    var match = html.match(/\s*\(([^()]*)\)\s*\.?\s*$/);
    if (!match) return { html: html, period: "" };
    return {
      html: html.slice(0, match.index).replace(/\.\s*$/, ""),
      period: match[1]
    };
  }

  function ExperienceTimeline() {
    return e(Timeline, {
      items: values(pageData.internships).map(function (item, index) {
        var details = splitPeriod(item);
        return {
          color: index === values(pageData.internships).length - 1 ? "#b24844" : "#6f9485",
          children: e("div", null,
            details.period && e("span", { className: "home-journey-date" }, details.period),
            e(RichText, { as: "div", className: "home-journey-title", html: details.html })
          )
        };
      })
    });
  }

  function EducationTimeline() {
    return e(Timeline, {
      items: values(pageData.educations).map(function (item) {
        var record = typeof item === "string" ? { text: item } : item;
        return {
          color: "#6f95a3",
          children: e("div", null,
            e("div", { className: "home-journey-title" }, record.text),
            record.tag && e(Tag, { className: "home-journey-tag" }, record.tag)
          )
        };
      })
    });
  }

  function Journey() {
    return e("section", { id: "journey", className: "home-band home-journey" },
      e("div", { className: "home-inner" },
        e(SectionHeading, { kicker: "Journey", title: "Learning across labs and teams." }),
        e("div", { className: "home-journey__grid" },
          e("div", { id: "internships" },
            e("h3", null, "Experience"),
            e(ExperienceTimeline)
          ),
          e("div", { id: "educations" },
            e("h3", null, "Education"),
            e(EducationTimeline)
          )
        )
      )
    );
  }

  function Awards() {
    return e("section", { id: "awards", className: "home-band home-awards" },
      e("div", { className: "home-inner home-split" },
        e("div", null,
          e(SectionHeading, { kicker: "Recognition", title: "Moments worth keeping." })
        ),
        e(List, {
          className: "home-award-list",
          dataSource: values(pageData.awards),
          renderItem: function (award, index) {
            var number = String(index + 1).padStart(2, "0");
            return e(List.Item, { key: index },
              e("span", { className: "home-award-index" }, number),
              e("span", null, award)
            );
          }
        })
      )
    );
  }

  function Homepage() {
    var initialDark = document.documentElement.getAttribute("data-theme") === "dark";
    var state = React.useState(initialDark);
    var dark = state[0];
    var setDark = state[1];

    React.useEffect(function () {
      var themeObserver = new MutationObserver(function () {
        setDark(document.documentElement.getAttribute("data-theme") === "dark");
      });
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      return function () { themeObserver.disconnect(); };
    }, []);

    var themeConfig = {
      algorithm: dark ? antd.theme.darkAlgorithm : antd.theme.defaultAlgorithm,
      token: {
        colorPrimary: dark ? "#ec958d" : "#b24844",
        colorInfo: dark ? "#93b4c0" : "#6f95a3",
        colorText: dark ? "#e8ece9" : "#30343a",
        colorTextSecondary: dark ? "#adb7b3" : "#687176",
        colorBgContainer: dark ? "#202526" : "#ffffff",
        colorBorderSecondary: dark ? "rgba(236,239,237,.14)" : "rgba(48,52,58,.14)",
        borderRadius: 6,
        fontFamily: "Avenir Next, Avenir, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
      }
    };

    return e(ConfigProvider, { theme: themeConfig },
      e(React.Fragment, null,
        e(Hero),
        e(About),
        e(Research),
        e(Updates),
        e(Work),
        e(Journey),
        e(Awards),
        FloatButton && FloatButton.BackTop && e(FloatButton.BackTop, {
          visibilityHeight: 520,
          icon: icon("ArrowUpOutlined"),
          tooltip: "Back to top"
        })
      )
    );
  }

  ReactDOM.createRoot(rootNode).render(e(Homepage));
})();
