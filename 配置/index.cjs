/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9d3b4e75bb01392d',
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'db8a779e4d11f87bdc49afe3cb52c879',
  PROVINCE: '山东',
  CITY: '济南',
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJUOO6WX1oNTgWpijP9Ur8dyv_PM''oJUOO6aPPBCBdwilyzC71QgdmT98',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'B37PPbj8xNRSLGGCc9kowHaxOxf6L-GU7T-YhD7dtoU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-02',
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oJUOO6aPPBCBdwilyzC71QgdmT98',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJUOO6aPPBCBdwilyzC71QgdmT98',
    }
  ],
}

module.exports = USER_CONFIG

