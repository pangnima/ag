<template>
	<footer class="footer">
		<div class="container">
			<div class="f-box">
				<h1 class="f-logo">아게더</h1>
				<p>
					아프리카TV와 관련된 모든 내용을 마음껏 올리고 <br>
					공유할 수 있는 오픈 커뮤니티입니다.
				</p>
			</div>
			<div class="site-map">
				<ul>
					<li>
						<router-link to="/">모아보기</router-link>
					</li>
					<li>
						<router-link to="/">티키타카</router-link>
						<router-link to="/">클립</router-link>
					</li>
					<li>
						<router-link to="/">움짤</router-link>
						<router-link to="/">클립</router-link>
					</li>
					<li>
						<router-link to="/">플레이스</router-link>
						<router-link to="/">방송 리뷰</router-link>
					</li>
					<li>
						<router-link to="/">BJ정보</router-link>
					</li>
					<li>
						<router-link to="/">이용약관</router-link>
						<router-link to="/">개인정보처리방침</router-link>
						<router-link to="/">고객센터</router-link>
						<router-link to="/">로그인</router-link>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>


<style lang="scss" scoped>
	.footer{
		margin-top:100px;
		background: #060606;
		padding:50px 0 60px;
		.f-box{
			.f-logo{font-size: 38px;}
			p{font-size: 16px; padding-top:30px;}
		}
		.container{
			color:#eee;
			display: flex;
			.site-map{
				margin-left: auto;
				text-align: right;
				ul{
					display: flex;
					li{
						margin-right: 35px;
						a{display: block;}
					}
				}
			}
		}
	}
</style>