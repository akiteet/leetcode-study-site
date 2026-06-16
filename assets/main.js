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
    slug: "056-merge-intervals",
    number: "56",
    title: "Merge Intervals",
    cnTitle: "合并区间",
    difficulty: "Medium",
    tags: ["贪心", "排序", "数组"],
    href: "problems/056-merge-intervals.html"
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
  },
  {
    slug: "128-longest-consecutive-sequence",
    number: "128",
    title: "Longest Consecutive Sequence",
    cnTitle: "最长连续序列",
    difficulty: "Medium",
    tags: ["哈希表", "数组"],
    href: "problems/128-longest-consecutive-sequence.html"
  },
  {
    slug: "347-top-k-frequent-elements",
    number: "347",
    title: "Top K Frequent Elements",
    cnTitle: "前 K 个高频元素",
    difficulty: "Medium",
    tags: ["哈希表", "堆", "计数"],
    href: "problems/347-top-k-frequent-elements.html"
  },
  {
    slug: "350-intersection-of-two-arrays-ii",
    number: "350",
    title: "Intersection of Two Arrays II",
    cnTitle: "两个数组的交集 II",
    difficulty: "Easy",
    tags: ["哈希表", "双指针", "数组"],
    href: "problems/350-intersection-of-two-arrays-ii.html"
  },
  {
    slug: "560-subarray-sum-equals-k",
    number: "560",
    title: "Subarray Sum Equals K",
    cnTitle: "和为 K 的子数组",
    difficulty: "Medium",
    tags: ["哈希表", "前缀和", "数组"],
    href: "problems/560-subarray-sum-equals-k.html"
  },
  {
    slug: "041-first-missing-positive",
    number: "41",
    title: "First Missing Positive",
    cnTitle: "缺失的第一个正数",
    difficulty: "Hard",
    tags: ["哈希表", "数组", "原地哈希"],
    href: "problems/041-first-missing-positive.html"
  },
  {
    slug: "189-rotate-array",
    number: "189",
    title: "Rotate Array",
    cnTitle: "轮转数组",
    difficulty: "Medium",
    tags: ["双指针", "数组"],
    href: "problems/189-rotate-array.html"
  },
  {
    slug: "238-product-of-array-except-self",
    number: "238",
    title: "Product of Array Except Self",
    cnTitle: "除自身以外数组的乘积",
    difficulty: "Medium",
    tags: ["数组", "前后缀"],
    href: "problems/238-product-of-array-except-self.html"
  },
  {
    slug: "011-container-with-most-water",
    number: "11",
    title: "Container With Most Water",
    cnTitle: "盛最多水的容器",
    difficulty: "Medium",
    tags: ["双指针", "数组"],
    href: "problems/011-container-with-most-water.html"
  },
  {
    slug: "042-trapping-rain-water",
    number: "42",
    title: "Trapping Rain Water",
    cnTitle: "接雨水",
    difficulty: "Hard",
    tags: ["双指针", "数组", "前后缀"],
    href: "problems/042-trapping-rain-water.html"
  },
  {
    slug: "015-3sum",
    number: "15",
    title: "3Sum",
    cnTitle: "三数之和",
    difficulty: "Medium",
    tags: ["双指针", "排序", "数组"],
    href: "problems/015-3sum.html"
  },
  {
    slug: "167-two-sum-ii-input-array-is-sorted",
    number: "167",
    title: "Two Sum II - Input Array Is Sorted",
    cnTitle: "两数之和 II - 输入有序数组",
    difficulty: "Medium",
    tags: ["双指针", "数组"],
    href: "problems/167-two-sum-ii-input-array-is-sorted.html"
  },
  {
    slug: "209-minimum-size-subarray-sum",
    number: "209",
    title: "Minimum Size Subarray Sum",
    cnTitle: "长度最小的子数组",
    difficulty: "Medium",
    tags: ["滑动窗口", "数组"],
    href: "problems/209-minimum-size-subarray-sum.html"
  },
  {
    slug: "424-longest-repeating-character-replacement",
    number: "424",
    title: "Longest Repeating Character Replacement",
    cnTitle: "替换后的最长重复字符",
    difficulty: "Medium",
    tags: ["滑动窗口", "哈希表", "字符串"],
    href: "problems/424-longest-repeating-character-replacement.html"
  },
  {
    slug: "438-find-all-anagrams-in-a-string",
    number: "438",
    title: "Find All Anagrams in a String",
    cnTitle: "找到字符串中所有字母异位词",
    difficulty: "Medium",
    tags: ["滑动窗口", "哈希表", "字符串"],
    href: "problems/438-find-all-anagrams-in-a-string.html"
  },
  {
    slug: "076-minimum-window-substring",
    number: "76",
    title: "Minimum Window Substring",
    cnTitle: "最小覆盖子串",
    difficulty: "Hard",
    tags: ["滑动窗口", "哈希表", "字符串"],
    href: "problems/076-minimum-window-substring.html"
  },
  {
    slug: "239-sliding-window-maximum",
    number: "239",
    title: "Sliding Window Maximum",
    cnTitle: "滑动窗口最大值",
    difficulty: "Hard",
    tags: ["滑动窗口", "队列", "单调队列"],
    href: "problems/239-sliding-window-maximum.html"
  },
  {
    slug: "739-daily-temperatures",
    number: "739",
    title: "Daily Temperatures",
    cnTitle: "每日温度",
    difficulty: "Medium",
    tags: ["栈", "单调栈", "数组"],
    href: "problems/739-daily-temperatures.html"
  },
  {
    slug: "155-min-stack",
    number: "155",
    title: "Min Stack",
    cnTitle: "最小栈",
    difficulty: "Medium",
    tags: ["栈", "设计"],
    href: "problems/155-min-stack.html"
  },
  {
    slug: "150-evaluate-reverse-polish-notation",
    number: "150",
    title: "Evaluate Reverse Polish Notation",
    cnTitle: "逆波兰表达式求值",
    difficulty: "Medium",
    tags: ["栈", "数组"],
    href: "problems/150-evaluate-reverse-polish-notation.html"
  },
  {
    slug: "100-same-tree",
    number: "100",
    title: "Same Tree",
    cnTitle: "相同的树",
    difficulty: "Easy",
    tags: ["二叉树", "DFS"],
    href: "problems/100-same-tree.html"
  },
  {
    slug: "101-symmetric-tree",
    number: "101",
    title: "Symmetric Tree",
    cnTitle: "对称二叉树",
    difficulty: "Easy",
    tags: ["二叉树", "DFS", "BFS"],
    href: "problems/101-symmetric-tree.html"
  },
  {
    slug: "112-path-sum",
    number: "112",
    title: "Path Sum",
    cnTitle: "路径总和",
    difficulty: "Easy",
    tags: ["二叉树", "DFS"],
    href: "problems/112-path-sum.html"
  },
  {
    slug: "695-max-area-of-island",
    number: "695",
    title: "Max Area of Island",
    cnTitle: "岛屿的最大面积",
    difficulty: "Medium",
    tags: ["DFS", "BFS", "矩阵"],
    href: "problems/695-max-area-of-island.html"
  },
  {
    slug: "994-rotting-oranges",
    number: "994",
    title: "Rotting Oranges",
    cnTitle: "腐烂的橘子",
    difficulty: "Medium",
    tags: ["BFS", "队列", "矩阵"],
    href: "problems/994-rotting-oranges.html"
  },
  {
    slug: "130-surrounded-regions",
    number: "130",
    title: "Surrounded Regions",
    cnTitle: "被围绕的区域",
    difficulty: "Medium",
    tags: ["DFS", "BFS", "矩阵"],
    href: "problems/130-surrounded-regions.html"
  },
  {
    slug: "070-climbing-stairs",
    number: "70",
    title: "Climbing Stairs",
    cnTitle: "爬楼梯",
    difficulty: "Easy",
    tags: ["动态规划入门"],
    href: "problems/070-climbing-stairs.html"
  },
  {
    slug: "198-house-robber",
    number: "198",
    title: "House Robber",
    cnTitle: "打家劫舍",
    difficulty: "Medium",
    tags: ["动态规划入门", "数组"],
    href: "problems/198-house-robber.html"
  },
  {
    slug: "053-maximum-subarray",
    number: "53",
    title: "Maximum Subarray",
    cnTitle: "最大子数组和",
    difficulty: "Medium",
    tags: ["动态规划入门", "数组"],
    href: "problems/053-maximum-subarray.html"
  },
  {
    slug: "073-set-matrix-zeroes",
    number: "73",
    title: "Set Matrix Zeroes",
    cnTitle: "矩阵置零",
    difficulty: "Medium",
    tags: ["矩阵", "数组"],
    href: "problems/073-set-matrix-zeroes.html"
  },
  {
    slug: "054-spiral-matrix",
    number: "54",
    title: "Spiral Matrix",
    cnTitle: "螺旋矩阵",
    difficulty: "Medium",
    tags: ["矩阵", "模拟"],
    href: "problems/054-spiral-matrix.html"
  },
  {
    slug: "048-rotate-image",
    number: "48",
    title: "Rotate Image",
    cnTitle: "旋转图像",
    difficulty: "Medium",
    tags: ["矩阵", "数组"],
    href: "problems/048-rotate-image.html"
  },
  {
    slug: "240-search-a-2d-matrix-ii",
    number: "240",
    title: "Search a 2D Matrix II",
    cnTitle: "搜索二维矩阵 II",
    difficulty: "Medium",
    tags: ["矩阵", "二分思想"],
    href: "problems/240-search-a-2d-matrix-ii.html"
  },
  {
    slug: "160-intersection-of-two-linked-lists",
    number: "160",
    title: "Intersection of Two Linked Lists",
    cnTitle: "相交链表",
    difficulty: "Easy",
    tags: ["链表", "双指针"],
    href: "problems/160-intersection-of-two-linked-lists.html"
  },
  {
    slug: "206-reverse-linked-list",
    number: "206",
    title: "Reverse Linked List",
    cnTitle: "反转链表",
    difficulty: "Easy",
    tags: ["链表", "双指针"],
    href: "problems/206-reverse-linked-list.html"
  },
  {
    slug: "234-palindrome-linked-list",
    number: "234",
    title: "Palindrome Linked List",
    cnTitle: "回文链表",
    difficulty: "Easy",
    tags: ["链表", "双指针"],
    href: "problems/234-palindrome-linked-list.html"
  },
  {
    slug: "141-linked-list-cycle",
    number: "141",
    title: "Linked List Cycle",
    cnTitle: "环形链表",
    difficulty: "Easy",
    tags: ["链表", "快慢指针"],
    href: "problems/141-linked-list-cycle.html"
  },
  {
    slug: "142-linked-list-cycle-ii",
    number: "142",
    title: "Linked List Cycle II",
    cnTitle: "环形链表 II",
    difficulty: "Medium",
    tags: ["链表", "快慢指针"],
    href: "problems/142-linked-list-cycle-ii.html"
  },
  {
    slug: "021-merge-two-sorted-lists",
    number: "21",
    title: "Merge Two Sorted Lists",
    cnTitle: "合并两个有序链表",
    difficulty: "Easy",
    tags: ["链表", "递归"],
    href: "problems/021-merge-two-sorted-lists.html"
  },
  {
    slug: "002-add-two-numbers",
    number: "2",
    title: "Add Two Numbers",
    cnTitle: "两数相加",
    difficulty: "Medium",
    tags: ["链表", "模拟"],
    href: "problems/002-add-two-numbers.html"
  },
  {
    slug: "019-remove-nth-node-from-end-of-list",
    number: "19",
    title: "Remove Nth Node From End of List",
    cnTitle: "删除链表的倒数第 N 个结点",
    difficulty: "Medium",
    tags: ["链表", "双指针"],
    href: "problems/019-remove-nth-node-from-end-of-list.html"
  },
  {
    slug: "024-swap-nodes-in-pairs",
    number: "24",
    title: "Swap Nodes in Pairs",
    cnTitle: "两两交换链表中的节点",
    difficulty: "Medium",
    tags: ["链表", "递归"],
    href: "problems/024-swap-nodes-in-pairs.html"
  },
  {
    slug: "025-reverse-nodes-in-k-group",
    number: "25",
    title: "Reverse Nodes in k-Group",
    cnTitle: "K 个一组翻转链表",
    difficulty: "Hard",
    tags: ["链表", "递归"],
    href: "problems/025-reverse-nodes-in-k-group.html"
  },
  {
    slug: "138-copy-list-with-random-pointer",
    number: "138",
    title: "Copy List with Random Pointer",
    cnTitle: "随机链表的复制",
    difficulty: "Medium",
    tags: ["链表", "哈希表"],
    href: "problems/138-copy-list-with-random-pointer.html"
  },
  {
    slug: "148-sort-list",
    number: "148",
    title: "Sort List",
    cnTitle: "排序链表",
    difficulty: "Medium",
    tags: ["链表", "归并排序"],
    href: "problems/148-sort-list.html"
  },
  {
    slug: "094-binary-tree-inorder-traversal",
    number: "94",
    title: "Binary Tree Inorder Traversal",
    cnTitle: "二叉树的中序遍历",
    difficulty: "Easy",
    tags: ["二叉树", "DFS", "栈"],
    href: "problems/094-binary-tree-inorder-traversal.html"
  },
  {
    slug: "543-diameter-of-binary-tree",
    number: "543",
    title: "Diameter of Binary Tree",
    cnTitle: "二叉树的直径",
    difficulty: "Easy",
    tags: ["二叉树", "DFS"],
    href: "problems/543-diameter-of-binary-tree.html"
  },
  {
    slug: "108-convert-sorted-array-to-binary-search-tree",
    number: "108",
    title: "Convert Sorted Array to Binary Search Tree",
    cnTitle: "将有序数组转换为二叉搜索树",
    difficulty: "Easy",
    tags: ["二叉树", "二叉搜索树", "递归"],
    href: "problems/108-convert-sorted-array-to-binary-search-tree.html"
  },
  {
    slug: "098-validate-binary-search-tree",
    number: "98",
    title: "Validate Binary Search Tree",
    cnTitle: "验证二叉搜索树",
    difficulty: "Medium",
    tags: ["二叉树", "二叉搜索树", "DFS"],
    href: "problems/098-validate-binary-search-tree.html"
  },
  {
    slug: "230-kth-smallest-element-in-a-bst",
    number: "230",
    title: "Kth Smallest Element in a BST",
    cnTitle: "二叉搜索树中第 K 小的元素",
    difficulty: "Medium",
    tags: ["二叉树", "二叉搜索树", "中序遍历"],
    href: "problems/230-kth-smallest-element-in-a-bst.html"
  },
  {
    slug: "199-binary-tree-right-side-view",
    number: "199",
    title: "Binary Tree Right Side View",
    cnTitle: "二叉树的右视图",
    difficulty: "Medium",
    tags: ["二叉树", "BFS", "DFS"],
    href: "problems/199-binary-tree-right-side-view.html"
  },
  {
    slug: "114-flatten-binary-tree-to-linked-list",
    number: "114",
    title: "Flatten Binary Tree to Linked List",
    cnTitle: "二叉树展开为链表",
    difficulty: "Medium",
    tags: ["二叉树", "DFS", "链表"],
    href: "problems/114-flatten-binary-tree-to-linked-list.html"
  },
  {
    slug: "105-construct-binary-tree-from-preorder-and-inorder-traversal",
    number: "105",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    cnTitle: "从前序与中序遍历序列构造二叉树",
    difficulty: "Medium",
    tags: ["二叉树", "递归", "哈希表"],
    href: "problems/105-construct-binary-tree-from-preorder-and-inorder-traversal.html"
  },
  {
    slug: "394-decode-string",
    number: "394",
    title: "Decode String",
    cnTitle: "字符串解码",
    difficulty: "Medium",
    tags: ["栈", "字符串"],
    href: "problems/394-decode-string.html"
  },
  {
    slug: "084-largest-rectangle-in-histogram",
    number: "84",
    title: "Largest Rectangle in Histogram",
    cnTitle: "柱状图中最大的矩形",
    difficulty: "Hard",
    tags: ["栈", "单调栈"],
    href: "problems/084-largest-rectangle-in-histogram.html"
  },
  {
    slug: "215-kth-largest-element-in-an-array",
    number: "215",
    title: "Kth Largest Element in an Array",
    cnTitle: "数组中的第 K 个最大元素",
    difficulty: "Medium",
    tags: ["堆", "Top K"],
    href: "problems/215-kth-largest-element-in-an-array.html"
  },
  {
    slug: "295-find-median-from-data-stream",
    number: "295",
    title: "Find Median from Data Stream",
    cnTitle: "数据流的中位数",
    difficulty: "Hard",
    tags: ["堆", "数据流"],
    href: "problems/295-find-median-from-data-stream.html"
  },
  {
    slug: "055-jump-game",
    number: "55",
    title: "Jump Game",
    cnTitle: "跳跃游戏",
    difficulty: "Medium",
    tags: ["贪心", "数组"],
    href: "problems/055-jump-game.html"
  },
  {
    slug: "045-jump-game-ii",
    number: "45",
    title: "Jump Game II",
    cnTitle: "跳跃游戏 II",
    difficulty: "Medium",
    tags: ["贪心", "数组"],
    href: "problems/045-jump-game-ii.html"
  },
  {
    slug: "763-partition-labels",
    number: "763",
    title: "Partition Labels",
    cnTitle: "划分字母区间",
    difficulty: "Medium",
    tags: ["贪心", "字符串"],
    href: "problems/763-partition-labels.html"
  },
  {
    slug: "118-pascals-triangle",
    number: "118",
    title: "Pascal's Triangle",
    cnTitle: "杨辉三角",
    difficulty: "Easy",
    tags: ["动态规划入门", "数组"],
    href: "problems/118-pascals-triangle.html"
  },
  {
    slug: "279-perfect-squares",
    number: "279",
    title: "Perfect Squares",
    cnTitle: "完全平方数",
    difficulty: "Medium",
    tags: ["动态规划入门", "完全背包"],
    href: "problems/279-perfect-squares.html"
  },
  {
    slug: "322-coin-change",
    number: "322",
    title: "Coin Change",
    cnTitle: "零钱兑换",
    difficulty: "Medium",
    tags: ["动态规划入门", "完全背包"],
    href: "problems/322-coin-change.html"
  },
  {
    slug: "139-word-break",
    number: "139",
    title: "Word Break",
    cnTitle: "单词拆分",
    difficulty: "Medium",
    tags: ["动态规划入门", "字符串", "哈希表"],
    href: "problems/139-word-break.html"
  },
  {
    slug: "300-longest-increasing-subsequence",
    number: "300",
    title: "Longest Increasing Subsequence",
    cnTitle: "最长递增子序列",
    difficulty: "Medium",
    tags: ["动态规划入门", "数组"],
    href: "problems/300-longest-increasing-subsequence.html"
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
