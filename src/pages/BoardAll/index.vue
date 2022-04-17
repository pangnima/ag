<template>
	<div class="container">
		<div class="control-box">
			<div class="tag-box">
				<span>#전체</span>
				<span>#공지</span>
				<span>#스타크래프트</span>
				<span>#롤</span>
				<span>#배그</span>
			</div>
			<div class="search-box">
				<button type="button" class="btn-hot"><IconFire></IconFire></button>
				<div class="btn-search">
					<label for="search">
						<input type="text" placeholder="검색어" id="search">
						<IconSearch></IconSearch>
					</label>
				</div>
			</div>
			<div class="btn-container">
				<router-link to="/boardall/write"  class="btn-write"><span>글쓰기</span></router-link>
			</div>
		</div>
		<div class="board-container">
			<ul>
				<li>
					<span class="badge" type="notic">공지</span>
					<router-link to="/boardall/detail" class="title" type="photo"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="riple">[999]</em></router-link>
					<span class="write">감스트주보리우결단</span>
					<span class="time">14:28</span>
				</li>
				<li>
					<span class="badge" type="hot">인기</span>
					<router-link to="/boardall/detail" class="title" type="photo"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="riple">[999]</em></router-link>
					<span class="write">감스트주보리우결단</span>
					<span class="time">14:28</span>
				</li>
				<li>
					<span class="no">1</span>
					<span class="pos">카테고리명</span>
					<router-link to="/boardall/detail" class="title" type="photo"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="riple">[999]</em></router-link>
					<span class="write">감스트주보리우결단</span>
					<span class="time">14:28</span>
				</li>
				<li>
					<span class="no">2</span>
					<span class="pos">카테고리명 몇글자 까지?</span>
					<router-link to="/boardall/detail" class="title" type="video"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해 게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="riple">[999]</em></router-link>
					<span class="write">닉네임은어디까지가능?</span>
					<span class="time">14:28</span>
				</li>
				<li>
					<span class="no">3</span>
					<span class="pos">카테고리명</span>
					<router-link to="/boardall/detail" class="title" type="photo"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="riple">[999]</em></router-link>
					<span class="write">감스트주보리우결단</span>
					<span class="time">14:28</span>
				</li>
				<li>
					<span class="no">1</span>
					<span class="pos">카테고리명</span>
					<router-link to="/boardall/detail" class="title" type="video"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="riple">[999]</em></router-link>
					<span class="write">감스트주보리우결단</span>
					<span class="time">14:28</span>
				</li>
			</ul>
		</div>
		<PageNaiton></PageNaiton>
	</div>
</template>

<script>
import PageNaiton from '@/components/PageNations.vue';
import IconSearch from '@/assets/icon/ico_search.vue';
import IconFire from '@/assets/icon/ico_fire.vue';
export default {
	name: "AllBoard",
	components : {
		PageNaiton,IconSearch,IconFire
	}
}
</script>

<style lang="scss" scoped>
.container{padding:30px; border:solid 1px #e1e1e1; margin-top:40px; border-radius: 5px;}
.control-box{
	display: flex;
	align-items: center;
}
.tag-box{
	border:solid 1px #e1e1e1;
	border-radius: 5px;
	padding:5px 15px;
	span{
		font-size: 16px;
		cursor: pointer;
		& + span {margin-left:10px;}
	}
}
.search-box{
	margin-left: 20px;
	display: flex;
	align-items: center;
	.btn-hot{height: 40px; display: flex; align-items: center;}
	.btn-hot svg{width: 20px; height:20px}
	.btn-search svg{width: 20px; height: 20px;}
	.btn-search input{width:0; border:0; transition: all .5s; cursor: pointer; margin:0 10px 0 10px; height: 40px; border-bottom:solid 1px transparent}
	.btn-search label{display: flex;align-items: center; cursor: pointer;}
	.btn-search label:active,
	.btn-search label:focus,
	.btn-search label:hover
	{
		input{width: 200px; border-bottom:solid 1px #777; padding:0 10px;}
	}
}

.btn-container{
	margin-left: auto;
	[class^=btn-]{border:solid 1px #eee; padding:8px 20px; border-radius: 5px; font-size: 14px; transition: all .7s;}
	[class^=btn-]:hover{background: #333; color:#fff}
	[class^=btn-]:hover span {color:#fff;}
}
.board-container{
	margin-top: 20px;
	ul {
		li{display:flex; padding:15px 0; border-bottom:solid 1px #eee; font-size:$mf; align-items:center;
			.badge{font-weight: bold; padding:5px 15px; border-radius: 20px; font-size:14px; color:#000; border:solid 1px #777; margin-right: 10px;
				&[type='hot']{background: #f2f6dd;}
			}
			.no{display:flex; background:#b8dcff; min-width:20px; height:20px; margin-right:10px; border-radius:50%; color:#fff; align-items:center; justify-content:center;}
			.pos{padding:0 15px; border-left: solid 1px #000; max-width: 80px; width:80px;}
			.title{font-size: $mf; border-left:solid 1px #000; border-right:solid 1px #000; flex:1; padding:0 10px;
				display: flex;
				align-items: center;
				&[type="photo"]::before{content: ""; display: block; min-width:21px;height:16px; background: url("@/assets/images/icon/icon_photo.png") 0 0 no-repeat; background-size: 100% 100%; margin-right: 5px;}
				&[type="video"]::before{content: ""; display: block; min-width:21px;height:21px; background: url("@/assets/images/icon/icon_video.png") 0 0 no-repeat; background-size: 100% 100%; margin-right: 5px;}
				span{max-width:800px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
				.riple{color:#0a86a7; margin-left: 4px;}
			}
			.write { border-right:solid 1px #000; width: 180px; max-width: 180px; text-align: center;}
			.time{ padding:0 15px; width:50px;}
		}
	}
}
</style>