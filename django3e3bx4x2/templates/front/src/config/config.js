export default {
	baseUrl: 'http://localhost:8080/django3e3bx4x2/',
	name: '/django3e3bx4x2',
	indexNav: [
		{
			name: '音乐信息',
			url: '/index/yinlexinxi',
		},
		{
			name: '音乐分享',
			url: '/index/forum'
		}, 
		{
			name: '音乐资讯',
			url: '/index/news'
		},
		{
			name: '留言反馈',
			url: '/index/messages'
		},
	],
	cateList: [
		{
			name: '音乐分享',
			refTable: 'forumtype',
			refColumn: 'typename',
		},
		{
			name: '音乐资讯',
			refTable: 'newstype',
			refColumn: 'typename',
		},
	]
}
