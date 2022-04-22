<template>
	<div class="board-container">
		<ul class="board-list">
			<li>
				<span class="badge" type="notic">공지</span>
				<router-link to="/boardall/detail" class="tit"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="comment">[999]</em></router-link>
				<span class="nick">감스트주보리우결단</span>
				<span class="time">14:28</span>
			</li>
			<li>
				<span class="badge" type="hot">인기</span>
				<router-link to="/boardall/detail" class="tit"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="comment">[999]</em></router-link>
				<span class="nick">감스트주보리우결단</span>
				<span class="time">14:28</span>
			</li>
			<li>
				<span class="num">1</span>
				<span class="cate">카테고리명</span>
				<router-link to="/boardall/detail" class="tit">
					<IconPhoto></IconPhoto>
					<span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span>
					<em class="comment">[999]</em>
				</router-link>
				<span class="nick">감스트주보리우결단</span>
				<span class="time">14:28</span>
			</li>
			<li>
				<span class="num">2</span>
				<span class="cate">카테고리명 몇글자 까지?</span>
				<router-link to="/boardall/detail" class="tit"><IconVedio></IconVedio><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해 게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="comment">[999]</em></router-link>
				<span class="nick">닉네임은어디까지가능?</span>
				<span class="time">14:28</span>
			</li>
			<li>
				<span class="num">3</span>
				<span class="cate">카테고리명</span>
				<router-link to="/boardall/detail" class="tit"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="comment">[999]</em></router-link>
				<span class="nick">감스트주보리우결단</span>
				<span class="time">14:28</span>
			</li>
			<li>
				<span class="num">1</span>
				<span class="cate">카테고리명</span>
				<router-link to="/boardall/detail" class="tit"><span>게시글 제목을 한줄로만 쭈우우우우우우우우우우우욱 보여주고 나머진 말줄임표 해해해해</span> <em class="comment">[999]</em></router-link>
				<span class="nick">감스트주보리우결단</span>
				<span class="time">14:28</span>
			</li>
		</ul>
	</div>
</template>

<script>
import IconPhoto from '@/assets/icon/IconPhoto.vue';
import IconVedio from '@/assets/icon/IconVedio.vue';
export default {
	name:'BoardList',
	components:{
		IconPhoto,IconVedio
	}
}
</script>

<style lang="scss">
	.board-container{
		margin-top: 20px;
		ul {
			li{display:flex; padding:15px 0; border-bottom:solid 1px #eee; font-size:$mf; align-items:center;
				.badge{font-weight: bold; padding:2px 10px; border-radius: 20px; font-size:14px; color:#000; border:solid 1px #777; margin-right: 10px; font-size: 12px;
					&[type='hot']{background: #f2f6dd;}
				}
				.num{display:flex; background:#7db4e9; min-width:16px; height:16px; margin-right:10px; border-radius:50%; color:#fff; align-items:center; justify-content:center; font-size:12px;}
				.cate{padding:0 5px; border-left: solid 1px #ccc; max-width: 80px; width:80px; font-size:14px; text-align: center;}
				.tit{font-size: $mf; border-left:solid 1px #ccc; border-right:solid 1px #ccc; flex:1; padding:0 10px;
					display: flex;
					align-items: center;
					svg{margin-right: 10px;}
					span{max-width:800px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
					.comment{color:#0a86a7; margin-left: 4px; font-size: 12px;}
				}
				.nick {border-right:solid 1px #ccc; width: 100%; max-width: 130px; text-align: center; font-size: 12px;}
				.time{ padding:0 15px; width:50px; font-size: 12px;}
			}
		}
	}
</style>