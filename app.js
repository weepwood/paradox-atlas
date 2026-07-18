const paradoxes = [
  { id: 1, name: "说谎者悖论", category: "逻辑与自指", type: "语义悖论", summary: "“这句话是假的。”它若为真则为假，若为假则为真。", question: "一个句子能否一致地陈述自身为假？", core: "句子同时充当被判断的对象和执行判断的语言，自指让真值赋值形成闭环。", insight: "需要区分对象语言与元语言，或采用允许真值空缺、多值逻辑等更精细的语义系统。", tags: ["自指", "真值", "语言层级"] },
  { id: 2, name: "理发师悖论", category: "逻辑与自指", type: "定义矛盾", summary: "理发师只给所有不自己刮胡子的人刮胡子，那么他给自己刮吗？", question: "满足这一定义的理发师是否可能存在？", core: "无论选择给自己刮或不给自己刮，都会违反定义。", insight: "矛盾说明对象不存在，而不是现实里出现了无法完成的理发任务；它是罗素悖论的通俗版本。", tags: ["集合", "定义", "自指"] },
  { id: 3, name: "鳄鱼悖论", category: "逻辑与自指", type: "条件悖论", summary: "鳄鱼承诺：母亲若正确预测它是否还孩子，它就还。母亲预测“不还”。", question: "鳄鱼怎样做才能遵守自己的规则？", core: "预测结果与规则执行互相决定，任何行动都会改变预测是否正确。", insight: "把行动条件绑定到对行动本身的预测，可能制造自我破坏的契约。", tags: ["预测", "承诺", "循环条件"] },
  { id: 4, name: "意外考试悖论", category: "逻辑与自指", type: "认识逻辑", summary: "学生通过逐日排除断言突击考试不可能发生，但考试发生时仍感到意外。", question: "“知道考试日期”能否被学生提前稳定地推导出来？", core: "“知道”“可推断”“意外”随时间变化，推理本身又会影响知识状态。", insight: "关于未来知识的陈述不能总被普通经典逻辑直接处理。", tags: ["知识", "时间", "反向归纳"] },
  { id: 5, name: "全能悖论", category: "逻辑与自指", type: "概念边界", summary: "全能者能否创造一块自己举不起来的石头？", question: "逻辑上不一致的任务是否属于‘可以完成的事情’？", core: "问题把“全能”定义为同时完成互相矛盾的要求。", insight: "常见处理是把全能限定为能完成所有逻辑上可能的事情。", tags: ["全能", "模态逻辑", "概念分析"] },

  { id: 6, name: "罗素悖论", category: "数学与无穷", type: "集合论悖论", summary: "由所有“不包含自身的集合”组成的集合，是否包含自身？", question: "任意性质都能直接定义一个集合吗？", core: "若它包含自身，则按定义不应包含；若不包含，则按定义应包含。", insight: "它促使数学从朴素集合论转向以 ZF/ZFC 等公理系统限制集合构造。", tags: ["集合论", "公理化", "自指"] },
  { id: 7, name: "贝里悖论", category: "数学与无穷", type: "可定义性悖论", summary: "“不能用少于二十个汉字描述的最小正整数”似乎已被短句描述。", question: "自然语言中的“可描述”能否成为精确数学性质？", core: "句子在语言内部谈论表达长度，却没有给出稳定、形式化的描述系统。", insight: "可定义性必须相对于某个明确的形式语言与编码规则。", tags: ["语言", "可描述性", "整数"] },
  { id: 8, name: "芝诺悖论", category: "数学与无穷", type: "无穷过程", summary: "阿喀琉斯要先到达乌龟曾在的位置，因此似乎永远追不上。", question: "无限多个步骤是否必然需要无限长时间？", core: "把无限分割误认为总时长也必然无限。", insight: "收敛级数说明无限多个越来越短的区间可以拥有有限总和。", tags: ["极限", "运动", "收敛"] },
  { id: 9, name: "希尔伯特旅馆", category: "数学与无穷", type: "无穷集合", summary: "拥有无限房间且已经住满的旅馆，仍可通过整体移位接待新客人。", question: "一个集合能否与自己的真子集一样大？", core: "可数无限集合可以与增加或删去有限元素后的集合一一对应。", insight: "有限世界里的“部分一定小于整体”不适用于无限基数。", tags: ["无穷", "一一对应", "基数"] },
  { id: 10, name: "伽利略悖论", category: "数学与无穷", type: "无限基数", summary: "平方数看似比自然数少，却能通过 n ↔ n² 与自然数一一对应。", question: "无限集合之间应怎样比较大小？", core: "密度更稀疏不等于基数更小。", insight: "集合论用一一对应定义等势，而不是依赖直观上的疏密。", tags: ["自然数", "平方数", "等势"] },
  { id: 11, name: "巴拿赫—塔斯基悖论", category: "数学与无穷", type: "测度论定理", summary: "一个球可被分成有限个不可测点集，再重组为两个同样大小的球。", question: "纯数学中的分割为何不遵守体积守恒？", core: "分割块不是普通可测物体，并依赖选择公理与理想点集。", insight: "它不是现实复制物质的方法，而是揭示“体积”无法赋予所有点集。", tags: ["选择公理", "不可测集合", "几何"] },

  { id: 12, name: "蒙提霍尔问题", category: "概率与统计", type: "条件概率", summary: "三门选一后主持人打开一扇羊门，换门赢车概率是 2/3。", question: "打开空门后，剩余两扇门真的各有一半概率吗？", core: "主持人的行为带有信息且受规则约束，初选错误的 2/3 概率转移到另一扇未开门。", insight: "概率更新必须考虑观察结果是怎样产生的。", tags: ["贝叶斯", "条件概率", "信息"] },
  { id: 13, name: "生日悖论", category: "概率与统计", type: "组合概率", summary: "只需 23 人，至少两人生日相同的概率就超过 50%。", question: "为什么人数远少于 365，碰撞概率却如此高？", core: "比较的不是一个人与其他人，而是群体中全部两两组合。", insight: "当配对数量按 n² 增长时，碰撞会比线性直觉更早出现。", tags: ["组合", "碰撞概率", "配对"] },
  { id: 14, name: "辛普森悖论", category: "概率与统计", type: "统计反转", summary: "每个分组都成立的趋势，合并数据后可能反向。", question: "局部趋势为何会与总体趋势相反？", core: "各组样本权重不同，混杂变量改变了汇总后的加权关系。", insight: "分析总体数据前要检查分层结构、选择机制与潜在混杂因素。", tags: ["混杂变量", "分层", "因果推断"] },
  { id: 15, name: "检察官谬误", category: "概率与统计", type: "逆概率错误", summary: "证据在无辜者中罕见，不等于拥有证据者几乎必然有罪。", question: "P(证据|无辜) 能否直接当作 P(无辜|证据)？", core: "混淆条件概率方向，忽略基础发生率和候选总体。", insight: "司法、医学检测与风控都必须结合先验概率解释证据。", tags: ["基础率", "条件概率", "司法"] },
  { id: 16, name: "贝特朗悖论", category: "概率与统计", type: "随机性定义", summary: "“随机取圆中一条弦”因取法不同，会得到多个不同概率答案。", question: "“随机”是否已经是一个完整的数学描述？", core: "不同生成机制对应不同概率测度。", insight: "任何概率问题都必须明确样本空间、测度与随机过程。", tags: ["概率测度", "几何概率", "随机"] },
  { id: 17, name: "两信封悖论", category: "概率与统计", type: "期望值陷阱", summary: "似乎无论拿到哪个信封，换另一个的期望收益都更高。", question: "为什么同一套期望计算会建议永远换信封？", core: "推理对未知金额使用了不一致或不可归一化的先验分布。", insight: "期望值依赖明确的随机模型，不能把固定未知量随意当作对称随机量。", tags: ["期望值", "先验", "决策"] },

  { id: 18, name: "双生子佯谬", category: "物理与时间", type: "相对论佯谬", summary: "高速旅行的双胞胎返回后，会比留在地球的双胞胎年轻。", question: "双方都能说对方在运动，为何年龄差不对称？", core: "两条世界线并不对称；旅行者经历加速与参考系切换，固有时间不同。", insight: "时间膨胀不是视觉错觉，而是时空路径长度的差异。", tags: ["狭义相对论", "固有时间", "世界线"] },
  { id: 19, name: "祖父悖论", category: "物理与时间", type: "时间旅行", summary: "若回到过去阻止祖父生育后代，旅行者将不会出生，也就无法回去。", question: "过去能否被改变而不破坏因果一致性？", core: "行动消除了导致该行动发生的原因。", insight: "常见方案包括自洽时间线、分支宇宙，或否定向过去旅行的可实现性。", tags: ["因果", "时间旅行", "自洽性"] },
  { id: 20, name: "薛定谔的猫", category: "物理与时间", type: "量子思想实验", summary: "微观叠加若直接扩展到宏观，猫似乎在测量前既死又活。", question: "量子叠加在何处转化为确定的宏观结果？", core: "思想实验放大量子测量问题，挑战朴素地把波函数当作日常实体状态。", insight: "它引向哥本哈根、多世界、退相干等不同量子诠释。", tags: ["量子叠加", "测量", "退相干"] },
  { id: 21, name: "EPR 悖论", category: "物理与时间", type: "量子非定域性", summary: "纠缠粒子在远距离测量中呈现强相关，挑战局域实在论。", question: "量子力学是不完备，还是世界不满足局域实在论？", core: "贝尔实验表明局域隐变量理论无法复现实验统计相关。", insight: "纠缠不能用于超光速传递可控信息，但迫使我们重新理解物理实在。", tags: ["纠缠", "贝尔不等式", "局域性"] },
  { id: 22, name: "费米悖论", category: "物理与时间", type: "宇宙学疑问", summary: "银河系古老而庞大，若文明常见，我们为何没有看到明确迹象？", question: "高概率存在与零观测证据之间的张力来自哪里？", core: "某些前提可能错误：生命稀少、技术文明短命、星际扩张困难，或观测方式有限。", insight: "“大过滤器”把问题转化为文明在演化链条中最可能失败在哪一步。", tags: ["外星文明", "大过滤器", "德雷克方程"] },

  { id: 23, name: "囚徒困境", category: "决策与社会", type: "博弈论", summary: "各自背叛是个人占优策略，却让双方得到比合作更差的结果。", question: "个人理性为何会产生集体非理性？", core: "缺乏可信承诺时，每个人都要防范对方背叛。", insight: "重复博弈、声誉、惩罚与制度设计可以改变激励结构。", tags: ["纳什均衡", "合作", "激励"] },
  { id: 24, name: "公地悲剧", category: "决策与社会", type: "公共资源困境", summary: "每个人多使用一点共享资源都合理，合计却会把资源耗尽。", question: "为什么所有人追求局部收益会毁掉共同资产？", core: "个人获得全部边际收益，却只承担资源损耗的一小部分成本。", insight: "产权、配额、社区规范和可信治理可以把外部成本重新内部化。", tags: ["外部性", "公共资源", "治理"] },
  { id: 25, name: "节俭悖论", category: "决策与社会", type: "宏观经济", summary: "个人增加储蓄通常有益，但所有人同时减少消费可能让总收入与总储蓄下降。", question: "微观上正确的行为为何在宏观层面失效？", core: "一个人的支出是另一个人的收入；需求收缩会降低产出和就业。", insight: "个体最优不能直接外推为系统最优，需要区分短期需求与长期资本积累。", tags: ["宏观经济", "总需求", "合成谬误"] },
  { id: 26, name: "阿罗不可能定理", category: "决策与社会", type: "社会选择定理", summary: "三个及以上选项下，没有一种排序投票制度能同时满足一组看似合理的公平条件。", question: "能否无损地把个人偏好汇总为一致的社会偏好？", core: "非独裁、帕累托效率、无关选项独立性等条件无法同时满足。", insight: "投票制度不是中性容器；规则设计会改变集体选择。", tags: ["投票", "社会选择", "公平"] },
  { id: 27, name: "布雷斯悖论", category: "决策与社会", type: "交通网络", summary: "道路网络新增一条捷径，反而可能让所有人的平均通行时间增加。", question: "增加资源为何会让系统表现更差？", core: "每位司机都选择个人最快路线，新的选择改变均衡并制造更严重拥堵。", insight: "网络效率取决于全局激励；限制部分选择有时能改善所有人的结果。", tags: ["交通", "网络", "系统均衡"] },

  { id: 28, name: "乌鸦悖论", category: "知识与观察", type: "确证悖论", summary: "“所有乌鸦都是黑的”等价于“所有非黑物都不是乌鸦”，观察白鞋似乎也能支持乌鸦命题。", question: "逻辑等价的命题应获得完全相同的证据支持吗？", core: "纯逻辑确证与证据相关性的日常直觉发生冲突。", insight: "贝叶斯分析会认为白鞋只提供极其微弱的支持，而黑乌鸦提供更强信息。", tags: ["科学确证", "归纳", "证据"] },
  { id: 29, name: "知道者悖论", category: "知识与观察", type: "认识论悖论", summary: "“这句话不可能被知道”为真时，我们似乎已知道它；若为假，则它可能被知道。", question: "一个命题能否一致地断言自身不可被知道？", core: "知识算子与自指结合，会触发类似说谎者悖论的矛盾。", insight: "形式认识逻辑需要限制自指句或重新定义知识闭包规则。", tags: ["知识", "自指", "认识逻辑"] },
  { id: 30, name: "观察者悖论", category: "知识与观察", type: "测量反身性", summary: "观察一个系统的行为，可能改变系统本身，使我们无法看到“未被观察时”的原状。", question: "测量结果反映对象本身，还是对象对测量的反应？", core: "观察者进入因果链，参与塑造被观测现象。", insight: "社会研究、用户实验、量子测量与金融市场都需要评估反身性和观察效应。", tags: ["反身性", "测量", "观察效应"] }
];

const categories = ["全部", ...new Set(paradoxes.map(item => item.category))];
const state = { category: "全部", query: "" };
const grid = document.querySelector("#paradoxGrid");
const filterRow = document.querySelector("#filterRow");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const clearBtn = document.querySelector("#clearBtn");
const searchInput = document.querySelector("#searchInput");
const dialog = document.querySelector("#paradoxDialog");
const dialogContent = document.querySelector("#dialogContent");

function renderFilters() {
  filterRow.innerHTML = categories.map(category => `
    <button class="filter-button ${state.category === category ? "active" : ""}" data-category="${category}">${category}</button>
  `).join("");
}

function getFilteredParadoxes() {
  const keyword = state.query.trim().toLowerCase();
  return paradoxes.filter(item => {
    const matchesCategory = state.category === "全部" || item.category === state.category;
    const haystack = [item.name, item.category, item.type, item.summary, item.question, item.core, item.insight, ...item.tags].join(" ").toLowerCase();
    return matchesCategory && (!keyword || haystack.includes(keyword));
  });
}

function renderCards() {
  const items = getFilteredParadoxes();
  grid.innerHTML = items.map(item => `
    <button class="paradox-card" data-id="${item.id}" aria-label="查看${item.name}详情">
      <span class="card-top"><span class="card-number">NO.${String(item.id).padStart(2, "0")}</span><span class="category-pill">${item.category}</span></span>
      <h3>${item.name}</h3>
      <p>${item.summary}</p>
      <span class="card-footer"><b>${item.type}</b><span>展开阅读 ↗</span></span>
    </button>
  `).join("");
  resultCount.textContent = `显示 ${items.length} / ${paradoxes.length} 个悖论`;
  emptyState.hidden = items.length !== 0;
  clearBtn.hidden = state.category === "全部" && !state.query;
}

function updateView() { renderFilters(); renderCards(); }

function openParadox(id) {
  const item = paradoxes.find(paradox => paradox.id === Number(id));
  if (!item) return;
  dialogContent.innerHTML = `
    <article class="dialog-content">
      <span class="dialog-label">NO.${String(item.id).padStart(2, "0")} · ${item.category}</span>
      <h2>${item.name}</h2>
      <p class="dialog-lead">${item.summary}</p>
      <section class="dialog-section"><h3>悖论问题</h3><p>${item.question}</p></section>
      <section class="dialog-section"><h3>矛盾从哪里产生</h3><p>${item.core}</p></section>
      <section class="dialog-section"><h3>理解与启示</h3><p>${item.insight}</p></section>
      <div class="dialog-tags">${item.tags.map(tag => `<span># ${tag}</span>`).join("")}</div>
    </article>`;
  dialog.showModal();
}

filterRow.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  updateView();
});

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-id]");
  if (card) openParadox(card.dataset.id);
});

searchInput.addEventListener("input", event => { state.query = event.target.value; renderCards(); });
clearBtn.addEventListener("click", () => { state.category = "全部"; state.query = ""; searchInput.value = ""; updateView(); });
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

document.querySelector("#randomBtn").addEventListener("click", () => {
  const item = paradoxes[Math.floor(Math.random() * paradoxes.length)];
  openParadox(item.id);
});

const themeBtn = document.querySelector("#themeBtn");
const savedTheme = localStorage.getItem("paradox-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("paradox-theme", next);
});

function simulateMontyHall(rounds = 1000) {
  let switchWins = 0;
  let stayWins = 0;
  for (let i = 0; i < rounds; i += 1) {
    const prize = Math.floor(Math.random() * 3);
    const choice = Math.floor(Math.random() * 3);
    if (choice === prize) stayWins += 1;
    else switchWins += 1;
  }
  const switchRate = (switchWins / rounds) * 100;
  const stayRate = (stayWins / rounds) * 100;
  document.querySelector("#switchBar").style.width = `${switchRate}%`;
  document.querySelector("#stayBar").style.width = `${stayRate}%`;
  document.querySelector("#switchRate").textContent = `${switchRate.toFixed(1)}%`;
  document.querySelector("#stayRate").textContent = `${stayRate.toFixed(1)}%`;
}
document.querySelector("#montyBtn").addEventListener("click", () => simulateMontyHall());

function birthdayProbability(people) {
  let noMatch = 1;
  for (let i = 0; i < people; i += 1) noMatch *= (365 - i) / 365;
  return (1 - noMatch) * 100;
}
const peopleRange = document.querySelector("#peopleRange");
function updateBirthday() {
  const people = Number(peopleRange.value);
  document.querySelector("#peopleOutput").textContent = people;
  document.querySelector("#birthdayProbability").textContent = `${birthdayProbability(people).toFixed(1)}%`;
}
peopleRange.addEventListener("input", updateBirthday);

const hotelRooms = document.querySelector("#hotelRooms");
let hotelGuest = 9;
function renderHotel(shifted = false) {
  hotelRooms.innerHTML = Array.from({ length: 8 }, (_, index) => `<span class="room ${shifted ? "shifted" : ""}">${index + 1}<br>客${index + (hotelGuest > 9 ? 0 : 1)}</span>`).join("");
}
renderHotel();
document.querySelector("#hotelBtn").addEventListener("click", () => {
  hotelGuest += 1;
  renderHotel(true);
  document.querySelector("#hotelStatus").textContent = `所有房客向后移动，新客人入住 1 号房（已演示 ${hotelGuest - 8} 次）`;
  window.setTimeout(() => renderHotel(false), 580);
});

const payoffMap = {
  "cooperate-cooperate": ["双方各获 3 分", "共同最优，但不是单次博弈中的稳定选择。"],
  "cooperate-betray": ["你得 0 分，对方得 5 分", "你的合作被利用，对方获得最大个体收益。"],
  "betray-cooperate": ["你得 5 分，对方得 0 分", "你通过背叛获得最大个体收益。"],
  "betray-betray": ["双方各获 1 分", "背叛是占优策略，却把双方推向更差的共同结果。"]
};
function updatePayoff() {
  const key = `${document.querySelector("#playerChoice").value}-${document.querySelector("#otherChoice").value}`;
  const [title, detail] = payoffMap[key];
  document.querySelector("#payoffResult").innerHTML = `<strong>${title}</strong><span>${detail}</span>`;
}
document.querySelector("#playerChoice").addEventListener("change", updatePayoff);
document.querySelector("#otherChoice").addEventListener("change", updatePayoff);

updateView();
updateBirthday();
