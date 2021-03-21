Page({
  data: {
    currentLink: {},
    list: [{
        id: 0,
        value: "微信",
        checked: true,
        disabled: false,
        link: "/pages/imitate/wx/index",
        name: "微信"
      },
      {
        id: 1,
        value: "支付宝",
        checked: false,
        disabled: true,
        link: "",
        name: "支付宝"
      },
      {
        id: 2,
        value: "美团",
        checked: false,
        disabled: true,
        link: "",
        name: "美团"
      },
      {
        id: 3,
        value: "滴滴",
        checked: false,
        disabled: true,
        link: "",
        name: "滴滴"
      },
      {
        id: 4,
        value: "Boss直聘",
        checked: false,
        disabled: true,
        link: "",
        name: "Boss直聘"
      },
    ]
  },
  onLoad() {
    const currentLink = {
      url: this.data.list[0].link
    }
    this.setData({
      currentLink
    })
  },
  checkboxChange(e) {
    const items = this.data.list
    let currentLink = {};
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value;
      if (items[i].checked) {
        currentLink.url = items[i].link;
      }
    }
    this.setData({
      items,
      currentLink
    })
  }
})