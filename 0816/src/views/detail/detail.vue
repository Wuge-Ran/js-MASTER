<template>
  <div class="content-main">
    <div  class="main-article">
      <div v-show="false" id="myChart" :style="{width: '100%', height: '100%'}"></div>
      <div v-if="true">
        <h1></h1>
        <div class="mian-info">
          <span>发布于 8 个月前</span>  
          <span> 作者 i5ting  </span>
          <span>35646 次浏览</span>  
          <span>最后一次编辑是 7 个月前</span>  
          <span>来自 分享</span>
        </div>
        <div  class="article">
          <div></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    mounted(){
      
    }
  }
</script>
<style>

.content-main {
  height:100%;
  left:22%;
  right:0;
  z-index:1;
}
  

  .main-top {
    width :100%;
    height :44px;
    line-height :32px;
    z-index :100;
    overflow :hidden;
    top :0;
    border-bottom :1px solid #ddd;
    text-align :center;
    line-height :44px;
  }
  .main-article{
  	box-sizing: border-box;
    top :45px;
    bottom :0;
    width :100%;
    height :100%;
    padding :30px;
    background-color :#fff;
    overflow-y :auto;
  }
    h1
    {
    	padding-top: 20px;
    }
  .mian-info{
    font-size :12px;
    color : #838383;
    padding:10px 0;
  }
    
  .mian-info span:before{
    content: "•";
  }
.article{
  padding-top:10px;
}

.markdown-text p,.preview p {
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -pre-wrap;
	white-space: -o-pre-wrap;
	word-wrap: break-word;
	line-height: 2em;
	margin: 1em 0;
  font-size: 18px;
}

.markdown-text>:last-child,.preview>:last-child,textarea#title {
	margin-bottom: 1em;
}

.markdown-text>:first-child,.preview>:first-child {
	margin-top: 0;
}

.markdown-text li,.preview li {
	font-size: 14px;
	line-height: 2em;
}

.markdown-text li code,.markdown-text p code,.preview li code,.preview p code {
	color: #000;
	background-color: #fcfafa;
	padding: 4px 6px;
}

.markdown-text img {
	cursor: pointer;
}

.markdown-text h1 code,.markdown-text h2 code,.markdown-text h3 code,.markdown-text h4 code,.markdown-text h5 code,.markdown-text h6 code {
	font-size: inherit;
	color: inherit;
}

.panel .markdown-text a {
	color: #08c;
}

.preview {
	padding: .5em;
	font-size: 15px;
	min-height: 200px;
	word-break: break-all;
}

.preview p>img {
	display: block;
	box-shadow: 0 0 4px rgba(0,0,0,.6);
}

.markdown_editor .markdown_in_editor,.markdown_editor .markdown_in_preview {
	display: none;
}

.markdown_editor.in_editor .markdown_in_editor,.markdown_editor.in_preview .markdown_in_preview {
	display: block;
}
</style>

