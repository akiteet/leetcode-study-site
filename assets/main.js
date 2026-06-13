const problems = [
  {
    slug: "001-two-sum",
    number: "1",
    title: "Two Sum",
    cnTitle: "两数之和",
    difficulty: "Easy",
    tags: ["哈希表", "数组"],
    href: "problems/001-two-sum.html"
  },
  {
    slug: "049-group-anagrams",
    number: "49",
    title: "Group Anagrams",
    cnTitle: "字母异位词分组",
    difficulty: "Medium",
    tags: ["哈希表", "字符串"],
    href: "problems/049-group-anagrams.html"
  },
  {
    slug: "217-contains-duplicate",
    number: "217",
    title: "Contains Duplicate",
    cnTitle: "存在重复元素",
    difficulty: "Easy",
    tags: ["哈希表", "数组"],
    href: "problems/217-contains-duplicate.html"
  },
  {
    slug: "242-valid-anagram",
    number: "242",
    title: "Valid Anagram",
    cnTitle: "有效的字母异位词",
    difficulty: "Easy",
    tags: ["哈希表", "字符串"],
    href: "problems/242-valid-anagram.html"
  },
  {
    slug: "020-valid-parentheses",
    number: "20",
    title: "Valid Parentheses",
    cnTitle: "有效的括号",
    difficulty: "Easy",
    tags: ["栈", "字符串"],
    href: "problems/020-valid-parentheses.html"
  },
  {
    slug: "125-valid-palindrome",
    number: "125",
    title: "Valid Palindrome",
    cnTitle: "验证回文串",
    difficulty: "Easy",
    tags: ["双指针", "字符串"],
    href: "problems/125-valid-palindrome.html"
  },
  {
    slug: "088-merge-sorted-array",
    number: "88",
    title: "Merge Sorted Array",
    cnTitle: "合并两个有序数组",
    difficulty: "Easy",
    tags: ["双指针", "数组"],
    href: "problems/088-merge-sorted-array.html"
  },
  {
    slug: "283-move-zeroes",
    number: "283",
    title: "Move Zeroes",
    cnTitle: "移动零",
    difficulty: "Easy",
    tags: ["双指针", "数组"],
    href: "problems/283-move-zeroes.html"
  },
  {
    slug: "026-remove-duplicates-from-sorted-array",
    number: "26",
    title: "Remove Duplicates from Sorted Array",
    cnTitle: "删除有序数组中的重复项",
    difficulty: "Easy",
    tags: ["双指针", "数组"],
    href: "problems/026-remove-duplicates-from-sorted-array.html"
  },
  {
    slug: "121-best-time-to-buy-and-sell-stock",
    number: "121",
    title: "Best Time to Buy and Sell Stock",
    cnTitle: "买卖股票的最佳时机",
    difficulty: "Easy",
    tags: ["贪心", "数组"],
    href: "problems/121-best-time-to-buy-and-sell-stock.html"
  },
  {
    slug: "003-longest-substring-without-repeating-characters",
    number: "3",
    title: "Longest Substring Without Repeating Characters",
    cnTitle: "无重复字符的最长子串",
    difficulty: "Medium",
    tags: ["滑动窗口", "哈希表", "字符串"],
    href: "problems/003-longest-substring-without-repeating-characters.html"
  },
  {
    slug: "104-maximum-depth-of-binary-tree",
    number: "104",
    title: "Maximum Depth of Binary Tree",
    cnTitle: "二叉树的最大深度",
    difficulty: "Easy",
    tags: ["二叉树", "DFS"],
    href: "problems/104-maximum-depth-of-binary-tree.html"
  },
  {
    slug: "226-invert-binary-tree",
    number: "226",
    title: "Invert Binary Tree",
    cnTitle: "翻转二叉树",
    difficulty: "Easy",
    tags: ["二叉树", "DFS"],
    href: "problems/226-invert-binary-tree.html"
  },
  {
    slug: "102-binary-tree-level-order-traversal",
    number: "102",
    title: "Binary Tree Level Order Traversal",
    cnTitle: "二叉树的层序遍历",
    difficulty: "Medium",
    tags: ["二叉树", "队列", "BFS"],
    href: "problems/102-binary-tree-level-order-traversal.html"
  },
  {
    slug: "200-number-of-islands",
    number: "200",
    title: "Number of Islands",
    cnTitle: "岛屿数量",
    difficulty: "Medium",
    tags: ["DFS", "BFS", "矩阵"],
    href: "problems/200-number-of-islands.html"
  }
];

function isProblemPage() {
  return window.location.pathname.replace(/\\/g, "/").includes("/problems/");
}

function localHref(href) {
  return isProblemPage() ? `../${href}` : href;
}

function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, "");
}

function matchProblem(problem, query) {
  const key = normalizeText(query);
  const haystack = normalizeText([
    problem.number,
    problem.title,
    problem.cnTitle,
    problem.difficulty,
    ...problem.tags
  ].join(" "));
  return haystack.includes(key);
}

function renderProblemLists() {
  document.querySelectorAll(".problem-list").forEach((list) => {
    list.innerHTML = problems.map((problem) => `
      <li data-problem-item>
        <a class="problem-link" href="${localHref(problem.href)}" data-problem-link data-slug="${problem.slug}">
          ${problem.number}. ${problem.title}<br>
          <span class="muted">${problem.cnTitle}</span>
        </a>
      </li>
    `).join("");
  });
}

function markCurrentProblem() {
  const currentSlug = document.body.dataset.current;
  if (!currentSlug) return;

  document.querySelectorAll("[data-problem-link]").forEach((link) => {
    if (link.dataset.slug === currentSlug) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function renderSearchResults(input, resultsBox) {
  const query = input.value.trim();
  resultsBox.innerHTML = "";

  if (!query) {
    resultsBox.hidden = true;
    return;
  }

  const matched = problems.filter((problem) => matchProblem(problem, query));
  resultsBox.hidden = false;

  if (matched.length === 0) {
    resultsBox.innerHTML = '<div class="search-result"><strong>没有找到题目</strong><span>可以试试题号、英文题名、中文题名或题型。</span></div>';
    return;
  }

  resultsBox.innerHTML = matched.map((problem) => {
    const tags = problem.tags.join(" / ");
    return `
      <a class="search-result" href="${localHref(problem.href)}">
        <strong>${problem.number}. ${problem.title}</strong>
        <span>${problem.cnTitle} · ${problem.difficulty} · ${tags}</span>
      </a>
    `;
  }).join("");
}

renderProblemLists();
markCurrentProblem();

document.querySelectorAll("[data-search-box]").forEach((box) => {
  const input = box.querySelector("[data-site-search]");
  const results = box.querySelector("[data-search-results]");
  if (!input || !results) return;

  input.addEventListener("input", () => renderSearchResults(input, results));
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const firstMatch = problems.find((problem) => matchProblem(problem, input.value.trim()));
    if (firstMatch) {
      window.location.href = localHref(firstMatch.href);
    }
  });
});

document.querySelectorAll("[data-problem-search]").forEach((input) => {
  const list = document.querySelector(input.dataset.problemSearch);
  if (!list) return;

  input.addEventListener("input", () => {
    const query = input.value.trim();
    list.querySelectorAll("[data-problem-item]").forEach((item) => {
      const text = item.textContent || "";
      item.hidden = query ? !normalizeText(text).includes(normalizeText(query)) : false;
    });
  });
});

const topButton = document.querySelector("[data-back-to-top]");
if (topButton) {
  window.addEventListener("scroll", () => {
    topButton.classList.toggle("show", window.scrollY > 420);
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
