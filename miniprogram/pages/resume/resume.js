//index.js
const app = getApp()

Page({
  data: {
    show: {
      basicInfo: true,
      professionalSkill: false,
      educationExperience: true,
      workExperience: true,
      projectExperience: false,
      USOP: false,
      DBMS: false,
      UFE: false,
      selfEvaluation: true,
    },
    mappingToCh: {
      basicInfo: '基本信息',
      name: '姓名',
      target: '求职意向',
      birthday: '出生年月',
      phone: '手机',
      education: '学历',
      major: '专业',
      experience: '工作经验',
      email: '邮箱',
      educationExperience: '教育背景',
      workExperience: '工作经历',
      professionalSkill: '专业技能',
      projectExperience: '项目经历',
      selfEvaluation: '自我评价',
      description: '项目描述',
      responsibilities: '主要职责',
      performance: '工作业绩'
    },
    basicInfo: {
      name: '陈国明',
      target: '前端开发工程师',
      birthday: '1990.03',
      phone: '18822253630',
      education: '硕士',
      major: '计算机科学与技术',
      experience: '五年',
      email: ' chenguoming2015@163.com',
      image: '/images/name.png'
    },
    educationExperience: [{
        duration: '2009.09——2013.06',
        school: '河北科技大学',
        level: '本科',
        major: '数学与应用数学'
      },
      {
        duration: '2013.09——2016.06',
        school: '中国民航大学',
        level: '硕士',
        major: '计算机科学与技术'
      }
    ],
    workExperience: [{
        duration: '2016.07—— 2020.08 ',
        company: '神州租车（天津）有限公司',
        position: '运维开发工程师（前端）'
      },
      {
        duration: '2020.09—— 至 今 ',
        company: '宇信科技集团股份有限公司',
        position: '前端开发工程师'
      }
    ],
    professionalSkill: [
      '熟练掌握VUE基本原理及其核心插件（Vue Router和Vuex）；',
      '熟练使用ElementUI/Echarts，具备自定义组件开发的能力；',
      '熟练掌握HTML5/CSS3/JavaScript/jQuery等前端基础；',
      '具备工程化、模块化开发能力，掌握ES6+等新特性；',
      '熟练使用webpack、git等工具，熟悉http协议及前端性能优化；',
      '了解微信小程序，了解reactjs/nodejs/等；',
      '了解go（iris框架）、nginx配置和基本的shell命令；',
    ],
    projectExperience: [{
        name: '自助运维平台',
        shortName: 'USOP',
        description: '主要包括服务树，发布系统，监控系统，申请系统，日志系统，权限系统，配置管理等运维子系统。平台建设从专注于运维管理逐步到扩展到整个公司的自助运维；技术上也不断地工程化、标准化，目前平台登录用户1800+。',
        responsibilities: [
          '主导了权限系统、配置管理系统、监控系统的原型设计沟通及前端开发;',
          '协助完成服务树、发布系统、申请系统发布的前端开发工作；参与了用户空间及新版权限系统的部分开发工作;',
          '技术方面推进平台2.0版向vue转型，解决过渡期间项目兼容性问题并封装常用公共组件，如表格、树、图等；和后端一起定位并解决部分接口慢的问题。'
        ],
        performance: [
          '平台大大提升了运维工作效率，解决了运维日常管理的痛点，向平台化迈进了一步；方便了开发的自助查看、发布、申请服务等的需要；',
          '技术上从最初的jquery+模板的方式逐步迁移到了VUE（elementUI组件)，整个平台更加工程化、规范化，极大的提高了开发维护效率。'
        ]
      },
      {
        name: '数据库管理平台',
        shortName: 'DBMS',
        description: '主要包括资产管理，审核发布，数据检索，调度系统，数据同步，数据库监控等子系统；结合USOP平台的申请系统形成以数据库为中心，实现不同角色各种操作的闭环。让DBA的日常操作从执行各种脚本中过渡到操作统一的管理平台。',
        responsibilities: [
          '主导资产管理，审核发布，数据检索功能开发；并根据需求变动，持续迭代优化审核发布和数据检索；',
          '参与项目初始选型时，用smartadmin模板（angular）取代jquery，提高前端开发效率；部门转型VUE后，协助dbms向vue过渡转化；',
          '数据检索操作简洁性、易用性的改造；增加收藏、自动填充、快捷操作等提高用户使用效率。'
        ],
        performance: [
          '审核发布平台方便了值班DBA的日常工作，大大减少了人为操作失误，同时加快了审批速度；辅助DBA推广了公司SQL书写规范及线上数据库变更流程；',
          '数据检索结合权限和敏感字段管理，灵活方便的满足了开发人员的查询痛点，目前有收藏记录的数据检索用户800+。'
        ]
      },
      {
        name: '流量管理平台',
        shortName: 'UFE',
        description: '主要包括服务指标度量，七层和四层负载均衡系统、WAF防护系统、缓存系统、名字服务等；是公司层面服务流量的总入口。',
        responsibilities: [
          '负责UFE平管理端的整体原型设计和前端开发工作；',
          '推进UFE2.0改版，为提高开发效率，图表以嵌套grafana为主；新功能也逐步转向vue框架。'
        ],
        performance: [
          '平台支持管理接入节点，配置变更生效；流量状态的监控检查以及日志聚合查询，满足了运维对服务监控管理需求，平台已经稳定运行三年；',
          '平台提供多维度的接入日志查询和服务指标监控，方便开发查询和定位问题。'
        ]
      },
      {
        name: '农行人力资源管理平台',
        shortName: 'DHR',
        description: 'DHR系统为新一版农行人力资源管理平台，包括机构管理、岗位管理、人员管理、权限审批等模块.',
        responsibilities: [
          '负责岗位和人员管理相关模块的开发与维护；',
          '封装公共业务组件，推进前端项目规范化、统一化，提高开发效率'
        ],
        performance: [
          '完成公共业务组件开发以及相关模块的日常开发维护；',
        ]
      }
    ],
    selfEvaluation: [
      '有责任心、执行力；',
      '工作积极负责，善始善终;',
      '乐于学习、钻研新技术新框架;'
    ]
  },
  onLoad: function () {

  },
  toggle: function (event) {
    var item = event.currentTarget.dataset.show;
    this.setData({
      ['show.' + item]: !this.data.show[item]
    })
  }
})