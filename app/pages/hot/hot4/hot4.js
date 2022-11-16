
Page({
	data: {
		//用户全局信息
		userInfo: {},
		input: '',
		text1: `<p>来源&emsp;&emsp;  新华社</p>`,
    text: `<p><img style="width:100%;"
    src="https://red-ideological-and-political-classroom.oss-cn-beijing.aliyuncs.com/hot/needle.jpg?versionId=CAEQJhiBgMDzz9LJlBgiIDFiYTE5YTNjYzcyYzRkMTVhYzU0OTdmMWU4MDI1ZGQ5" /></p>
<p>&emsp;&emsp;</p>
<p>新华社北京7月24日电</p><p class="text_align-justify text_indent-2em" style="margin: 0px 0px 1.25rem; text-align: justify; overflow-wrap: break-word; line-height: calc(var(--font-size-larger)*1.9125rem); min-height: calc(var(--font-size-larger)*1.9125rem); color: #333333; font-family: FZYaSongS-R-GB, FZYaSong-M-GBK, 'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; background-color: #fafbfc;" data-source="cke">&emsp;&emsp;红色、绿色、蓝色&hellip;&hellip;飞针走线五彩缤纷；绣、插、点、挑&hellip;&hellip;制作手法千变万化；龙凤纹、鱼鸟纹、蝴蝶纹&hellip;&hellip;刺绣图文寓意丰富&mdash;&mdash;这便是苗绣，来自苗族源远流长的手工技艺。 作为首批入选国家级非物质文化遗产名录的传统民族文化艺术，苗绣如今已飞出大山，精彩传扬。</p> <p class="text_align-justify text_indent-2em" style="margin: 0px 0px 1.25rem; text-align: justify; overflow-wrap: break-word; line-height: calc(var(--font-size-larger)*1.9125rem); min-height: calc(var(--font-size-larger)*1.9125rem); color: #333333; font-family: FZYaSongS-R-GB, FZYaSong-M-GBK, 'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; background-color: #fafbfc;" data-source="cke">2021年2月，在贵州考察调研期间，习近平总书记来到毕节市黔西县（现&ldquo;黔西市&rdquo;）新仁苗族乡化屋村。精美的苗族传统服饰吸引了总书记的目光：&ldquo;这是手工做的吗？价格多少？销路怎么样？&rdquo; &ldquo;有机器绣，有手工绣。机绣的，一套价格一千多元。手绣的，一套可以卖到一万八千元。不只是苗族同胞会买来穿，不少游客也很喜欢。&rdquo;化屋村苗绣非遗传承人彭艺向总书记介绍道。 &ldquo;苗绣既是传统的也是时尚的，你们一针一线绣出来，何其精彩！&rdquo;</p><p class="text_align-justify text_indent-2em" style="margin: 0px 0px 1.25rem; text-align: justify; overflow-wrap: break-word; line-height: calc(var(--font-size-larger)*1.9125rem); min-height: calc(var(--font-size-larger)*1.9125rem); color: #333333; font-family: FZYaSongS-R-GB, FZYaSong-M-GBK, 'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; background-color: #fafbfc;" data-source="cke">&emsp;&emsp;习近平总书记勉励大家，一定要把苗绣发扬光大，这既是产业也是文化，发展好了既能弘扬民族文化、传统文化，同时也能为产业扶贫、为乡村振兴作出贡献。 &ldquo;习近平总书记用&lsquo;精彩&rsquo;二字形容&lsquo;一针一线&rsquo;，既是对苗绣这一非遗技艺的肯定，也体现了总书记对少数民族文化传承和发展的关怀。&rdquo;</p><p class="text_align-justify text_indent-2em" style="margin: 0px 0px 1.25rem; text-align: justify; overflow-wrap: break-word; line-height: calc(var(--font-size-larger)*1.9125rem); min-height: calc(var(--font-size-larger)*1.9125rem); color: #333333; font-family: FZYaSongS-R-GB, FZYaSong-M-GBK, 'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; background-color: #fafbfc;" data-source="cke">&emsp;&emsp;从事少数民族文化保护传承工作的贵州省凯里市银绣专班办公室负责人刘睿说。 &ldquo;我永远忘不了总书记欣赏苗绣时专注的眼神，他对苗绣的关心关爱，唤醒了大家的民族文化记忆。&rdquo;彭艺说。 这些年，彭艺走遍了贵州，四处拜访非遗传承人和民间艺人，了解水族的马尾绣、黔东南地区苗族的破线绣、松桃地区的双面绣&hellip;&hellip;吸收不同的刺绣技艺，将其融会贯通。</p><p class="text_align-justify text_indent-2em" style="margin: 0px 0px 1.25rem; text-align: justify; overflow-wrap: break-word; line-height: calc(var(--font-size-larger)*1.9125rem); min-height: calc(var(--font-size-larger)*1.9125rem); color: #333333; font-family: FZYaSongS-R-GB, FZYaSong-M-GBK, 'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; background-color: #fafbfc;" data-source="cke">&emsp;&emsp; 2021年以来，一项项有力措施在贵州扎实推进：成立苗绣产业发展工作领导小组，制定苗绣产业化、时尚化、国际化、品牌化发展目标，积极培养本土民族文化传承人，大力扶持特色民族手工艺企业&hellip;&hellip;古老的苗绣焕发生机。 &ldquo;总书记说苗绣既是传统的也是时尚的，让我们传承和发展民族文化找到了着力点。在传承中发展，要积极融合创新，赋予非遗技艺更旺盛的生命力。&rdquo;贵州省凯里学院民族研究院副院长曾祥慧目前正在系统整理、研究苗绣在新时代的发展成就。</p><p class="text_align-justify text_indent-2em" style="margin: 0px 0px 1.25rem; text-align: justify; overflow-wrap: break-word; line-height: calc(var(--font-size-larger)*1.9125rem); min-height: calc(var(--font-size-larger)*1.9125rem); color: #333333; font-family: FZYaSongS-R-GB, FZYaSong-M-GBK, 'PingFang SC', miui, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; background-color: #fafbfc;" data-source="cke">&emsp;&emsp; 2021年，苗绣登上了上海时装周。现在，通过网络和各种实体店，越来越多人欣赏甚至在日常生活中使用到这一交织于苗族文化长卷的绚丽艺术。（新华社记者骆飞 唐兴）</p>`,
		input1: '',
		input2: '',
		input3: ''
	},
	onLoad(option) {
		this.init();
	},
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {}
});
