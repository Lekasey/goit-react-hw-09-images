(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),s=(a(27),a(11)),i=a(4),l=a(5),u=a(7),d=a(6),m=(a(28),a(0)),h=function(e){var t=e.url,a=e.alt,n=e.onModalToggle;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,width:"640",alt:a,className:"ImageGalleryItem-image",onClick:n})})},g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.onModalToggle;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tag;return Object(m.jsx)(h,{url:n,alt:r,onModalToggle:function(){return a(t)}},t)}))})}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.changeHandler=function(t){e.setState({query:t.currentTarget.value})},e.submitHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.submitHandler,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeHandler})]})})}}]),a}(n.Component),b=function(e){var t=e.fetchImages;return Object(m.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},j=a(10),p=a.n(j),y=a(20),O=a(21),v=a.n(O);function x(){return(x=Object(y.a)(p.a.mark((function e(t){var a,n,r,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,n=void 0===a?"":a,r=t.currentPage,o=void 0===r?1:r,"20410166-62a7784bd988192fa85965390",c="https://pixabay.com/api/?q=".concat(n,"&page=").concat(o,"&key=").concat("20410166-62a7784bd988192fa85965390","&image_type=photo&orientation=horizontal&per_page=12"),e.next=5,v.a.get(c).then((function(e){return e.data.hits}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I={fetchImages:function(e){return x.apply(this,arguments)}},w=a(22),k=a.n(w),S=(a(69),function(){return Object(m.jsx)(k.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:60,width:60})}),M=document.querySelector("#modal-root"),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.back,a=e.forward,n=this.props.modalImage,r=n.largeImageURL,c=n.tags;return Object(o.createPortal)(Object(m.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(m.jsxs)("div",{className:"Modal",children:[Object(m.jsx)("button",{type:"button",className:"ModalButtonBack",onClick:function(){return t()},children:"<"}),Object(m.jsx)("img",{src:r,alt:c}),Object(m.jsx)("button",{type:"button",className:"ModalButtonForward",onClick:function(){return a()},children:">"})]})}),M)}}]),a}(n.Component),N=document.querySelector("body"),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",error:null,isLoading:!1,modal:!1,modalIndex:""},e.toggleModal=function(t){var a=e.state.images,n=a.find((function(e){return e.id===t}));e.setState((function(e){return{modal:!e.modal,modalIndex:a.indexOf(n)}}))},e.onFetchImages=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onChangeQuery=function(t){e.setState({searchQuery:t,images:[],currentPage:1})},e.fetchImages=function(){var t=e.state,a={currentPage:t.currentPage,searchQuery:t.searchQuery};e.setState({isLoading:!0}),I.fetchImages(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e.modalImageBackHandler=function(){0===e.state.modalIndex&&e.toggleModal(),e.setState((function(e){return{modalIndex:e.modalIndex-1}}))},e.modalImageForwardHandler=function(){var t=e.state,a=t.images;t.modalIndex>=a.length-2&&e.fetchImages(),e.setState((function(e){return{modalIndex:e.modalIndex+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.images.length>12&&this.onFetchImages()}},{key:"render",value:function(){var e=this.state,t=e.modal,a=e.modalIndex,n=e.images,r=e.isLoading;return Object(m.jsxs)("div",{children:[t?N.classList.add("modal-open"):N.classList.remove("modal-open"),Object(m.jsx)(f,{onSubmit:this.onChangeQuery}),Object(m.jsx)(g,{images:n,onModalToggle:this.toggleModal}),r&&Object(m.jsx)(S,{}),n.length>0&&!r&&Object(m.jsx)(b,{fetchImages:this.fetchImages}),t&&Object(m.jsx)(C,{toggleModal:this.toggleModal,modalImage:n[a],back:this.modalImageBackHandler,forward:this.modalImageForwardHandler})]})}}]),a}(n.Component);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7e7bcf2e.chunk.js.map