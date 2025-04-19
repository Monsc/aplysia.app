(this["webpackJsonpaplysia-app-client"]=this["webpackJsonpaplysia-app-client"]||[]).push([[9],{323:function(e,t,o){"use strict";o.d(t,"d",(function(){return u})),o.d(t,"e",(function(){return b})),o.d(t,"c",(function(){return m})),o.d(t,"f",(function(){return h})),o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return g}));var s=o(347),a=o(371),n=o.n(a),i=o(44),r=o(372),l=o(373);const c=Object(r.a)({apiKey:"AIzaSyA3VHRbj4knFBXK3YVFdsr7xn2MvE1A0_E",authDomain:"hotel-booking-app-2c070.firebaseapp.com",projectId:"hotel-booking-app-2c070",storageBucket:"hotel-booking-app-2c070.appspot.com",messagingSenderId:"308536271440",appId:"1:308536271440:web:cf389c892a5fa653486755"}),d=Object(l.a)(c);var p=o(811);const u=e=>n()(e).format("DD/MM/YYYY"),b=e=>n()(e).format("Do MMMM, YYYY"),m=e=>{let t=n()(),o=n()(e).format("YYYY");return t.diff(o,"years")},h=async(e,t)=>{if(!e)return void alert("No file found.");const o=Object(s.d)(d,t),a=Object(s.e)(o,e);let n;return a.on("state_changed",(e=>{}),(e=>{i.b.error(e,{autoClose:5500,pauseOnHover:!0})}),(()=>{n=Object(s.b)(a.snapshot.ref)})),await Promise.resolve(a).then((async e=>await Promise.resolve(n).then((e=>e))))},j=async(e,t)=>{if(!e||0===e.length)return void alert("No file found.");const o=[];return await Promise.all(e.map((async(e,s)=>{const a=Object(p.a)();let n=`images/rooms/${t.id}/roomImage-${a}`,i=await h(e,n);o.push({url:i,uuid:a})}))),o},g=async(e,t)=>{await Promise.all(e.map((async(e,o)=>{const a=e.uuid,n=Object(s.d)(d,`images/rooms/${t}/roomImage-${a}`);await Object(s.a)(n)})))}},359:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var s=o(47);const a=s.a`
mutation($from: Date!, $to: Date!, $roomNumbers: [Int]!, $paid: Boolean!, $amount: Int!,
    $bookedBy: ID!, $people: people!, $room: ID!, $hotel: ID!){
    addBooking(from: $from, to: $to, roomNumbers: $roomNumbers, paid: $paid, amount: $amount, 
        bookedBy: $bookedBy, people: $people, room: $room, hotel: $hotel){
      id
      from
      to
      bookedBy{
          name
      }
    }
  }
`,n=s.a`
mutation($id: ID!){
    cancelBooking(id: $id){
      id
      from
      to
      bookedBy{
          name
      }
    }
  }
`},802:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,o,s){return o&&e(t.prototype,o),s&&e(t,s),t}}(),n=r(o(0)),i=r(o(57));function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var c=!1,d=!1,p=!1,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:o.props.stripeKey}),o.hasPendingClick&&o.showStripeDialog())},o.onScriptError=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];o.hideLoadingDialog(),o.props.onScriptError&&o.props.onScriptError.apply(o,t)},o.onClosed=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];o._isMounted&&o.setState({open:!1}),o.props.closed&&o.props.closed.apply(o,t)},o.onOpened=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];o.setState({open:!0}),o.props.opened&&o.props.opened.apply(o,t)},o.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return s({},e,o.props.hasOwnProperty(t)&&l({},t,o.props[t]))}),{opened:o.onOpened,closed:o.onClosed})},o.onClick=function(){if(!o.props.disabled)if(p)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?o.showStripeDialog():(o.showLoadingDialog(),o.hasPendingClick=!0)},o.handleOnMouseDown=function(){o.setState({buttonActive:!0})},o.handleOnMouseUp=function(){o.setState({buttonActive:!1})},o.state={open:!1,buttonActive:!1},o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!d&&!c){c=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var o=!1,s=new Promise((function(o,s){t.onload=function(){d=!0,c=!1,o(),e.onScriptLoaded()},t.onerror=function(t){p=!0,c=!1,s(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){s.then((function(){return o?t({isCanceled:!0}):e()})),s.catch((function(e){return t(o?{isCanceled:!0}:e)}))})),cancel:function(){o=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){c||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return n.default.createElement("button",s({},l({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:s({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),n.default.createElement("span",{style:s({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return n.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},n.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?n.default.createElement(e,s({},l({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(n.default.Component);u.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},u.propTypes={desktopShowModal:i.default.bool,triggerEvent:i.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:i.default.string,style:i.default.object,textStyle:i.default.object,disabled:i.default.bool,ComponentClass:i.default.string,showLoadingDialog:i.default.func,hideLoadingDialog:i.default.func,onScriptError:i.default.func,onScriptTagCreated:i.default.func,reconfigureOnUpdate:i.default.bool,stripeKey:i.default.string.isRequired,token:i.default.func.isRequired,name:i.default.string,description:i.default.string,image:i.default.string,amount:i.default.number,locale:i.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:i.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:i.default.string,zipCode:i.default.bool,billingAddress:i.default.bool,shippingAddress:i.default.bool,email:i.default.string,allowRememberMe:i.default.bool,bitcoin:i.default.bool,alipay:i.default.oneOf(["auto",!0,!1]),alipayReusable:i.default.bool,opened:i.default.func,closed:i.default.func},u._isMounted=!1,t.default=u},810:function(e,t,o){"use strict";o.r(t);var s=o(0),a=o(11),n=o(29),i=o(10),r=o(1);const l=i.a.div`
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
    @media(max-width: 700px){
        max-width: calc(100vw - 140px)
    }
`,c=i.a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 4px;
    &.cur{
        div{
            background: #00d892;
        }
    }
    div{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #b0b0b0;
        margin-bottom: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    p{
        position: absolute;
        top: 120%;
        white-space: nowrap;
        color: grey;
    }
`,d=i.a.div`
    margin-top: 13px;
    height: 4px;
    width: 100%;
    background: #b0b0b0;
    &.cur{
        background: #00d892;
    }
`;var p=e=>{const{step:t}=e;return Object(r.jsxs)(l,{children:[Object(r.jsxs)(c,{className:""+(t>=1?"cur":""),children:[Object(r.jsx)("div",{children:"1"}),Object(r.jsx)(a.g,{className:"small",children:"Curtomer Info"})]}),Object(r.jsx)(d,{className:""+(t>=2?"cur":"")}),Object(r.jsxs)(c,{className:""+(t>=2?"cur":""),children:[Object(r.jsx)("div",{children:"2"}),Object(r.jsx)(a.g,{className:"small",children:"Payment"})]}),Object(r.jsx)(d,{className:""+(t>=3?"cur":"")}),Object(r.jsxs)(c,{className:""+(t>=3?"cur":""),children:[Object(r.jsx)("div",{children:"3"}),Object(r.jsx)(a.g,{className:"small",children:"Booking Confirmed"})]})]})},u=o(323),b=o(8);const m=i.a.div`
    display: flex;
    max-width: 1200px;
    margin: 80px auto 10px auto;
    border: 0.5px solid #d8d8d8;
    &.buttons{
        justify-content: space-between;
        border: 0;
        margin-top: 10px;
        @media(max-width: 576px){
            flex-direction: row;
        }
    }
    .section{
        margin: 16px;
        :first-child{
            flex-basis: 60%;
            border-right: 0.5px solid #d8d8d8;
            @media(max-width: 576px){
                border-right: 0
            }
        }
        :last-child{
            flex-basis: 40%
        }
    }
    @media(max-width: 576px){
        flex-direction: column;
        button{
            width: fit-content;
            margin-bottom: 16px;
        }
    }
`,h=i.a.div`
    max-width: 1200px;
    margin: 80px auto 10px auto;
    border: 0.5px solid #d8d8d8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;var j=e=>{const{user:t,room:o,booking:s}=e,n=Object(b.q)();return console.log(e),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m,{children:[Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)(a.g,{children:"Customer Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Name: ",Object(r.jsx)("span",{children:t.name})]}),Object(r.jsxs)(a.g,{className:"small",children:["Email: ",Object(r.jsx)("span",{children:t.email})]}),Object(r.jsxs)(a.g,{className:"small",children:["Age: ",Object(r.jsx)("span",{children:Object(u.c)(t.dob)})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total: ",Object(r.jsxs)("span",{children:[s.people.adults+s.people.children," Persons"]})]})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)(a.g,{children:"Booking Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Hotel: ",Object(r.jsx)("span",{children:o.hotel.name})]}),Object(r.jsxs)(a.g,{className:"small",children:["Room: ",Object(r.jsx)("span",{children:o.name})]}),Object(r.jsxs)(a.g,{className:"small",style:{margin:"-10px 0 10px 0"},children:["Room Number(s):",s.roomNumbers.map((e=>Object(r.jsx)("span",{className:"highlight",style:{margin:"4px 2px"},children:e})))]}),Object(r.jsxs)(a.g,{className:"small",children:["Price (Each room): ",Object(r.jsxs)("span",{children:["Rs. ",o.price]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total Cost: ",Object(r.jsxs)("span",{children:["Rs. ",s.amount]})]})]})]}),Object(r.jsxs)(m,{className:"buttons",children:[Object(r.jsx)(a.a,{onClick:()=>n(`/hotel/${o.hotel.id}`,{state:s}),children:"Go Back"}),Object(r.jsx)(a.a,{onClick:()=>n(`/payment/${o.hotel.id}/${o.id}/2`,{state:s}),children:"Confirm"})]})]})},g=o(314),f=o(154),x=o(317),O=o(359),y=o(44),k=o(97),N=o(802),v=o.n(N);const D=o(47).a`
mutation($tokenId: ID!, $bookingId: ID!, $bookedBy: ID!){
    payAmount(tokenId: $tokenId, bookingId: $bookingId, bookedBy: $bookedBy){
      id
      from
      to
      bookedBy{
          name
      }
    }
  }
`;var S=e=>{const{user:t,room:o,booking:n,bookingExists:i}=e,l=Object(b.q)(),[c]=Object(x.a)(O.a),[d]=Object(x.a)(D),[p,h]=Object(s.useState)(!1);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:p?Object(r.jsx)(k.a,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)(a.g,{children:"Customer Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Name: ",Object(r.jsx)("span",{children:t.name})]}),Object(r.jsxs)(a.g,{className:"small",children:["Email: ",Object(r.jsx)("span",{children:t.email})]}),Object(r.jsxs)(a.g,{className:"small",children:["Age: ",Object(r.jsx)("span",{children:Object(u.c)(t.dob)})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total: ",Object(r.jsx)("span",{children:n.people.adults+n.people.children})]}),Object(r.jsx)(a.g,{style:{marginTop:"20px"},children:"Booking Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Hotel: ",Object(r.jsx)("span",{children:o.hotel.name})]}),Object(r.jsxs)(a.g,{className:"small",children:["Room: ",Object(r.jsx)("span",{children:o.name})]}),Object(r.jsxs)(a.g,{className:"small",style:{margin:"-10px 0 10px 0"},children:["Room Number(s):",n.roomNumbers.map((e=>Object(r.jsx)("span",{className:"highlight",style:{margin:"4px 2px"},children:e})))]}),Object(r.jsxs)(a.g,{className:"small",children:["Price (Each room): ",Object(r.jsxs)("span",{children:["Rs. ",o.price]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total Cost: ",Object(r.jsxs)("span",{children:["Rs. ",n.amount]})]})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)(a.g,{children:"Payment Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Room(s) Cost: ",Object(r.jsxs)("span",{children:["Rs. ",n.amount]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Tax: ",Object(r.jsxs)("span",{children:["Rs. ",20]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total Cost:",Object(r.jsxs)("span",{children:["Rs. ",n.amount+20]})]}),Object(r.jsx)(v.a,{token:e=>{h(!0),i?d({variables:{tokenId:e.id,bookingId:n.id,bookedBy:n.bookedBy.id}}).then((e=>{h(!1);let t=n;t.id=e.data.payAmount.id,t.paid=!0,l(`/payment/${o.hotel.id}/${o.id}/3`,{state:t})})).catch((e=>{h(!1),y.b.error(e.message,{autoClose:5500,pauseOnHover:!0})})):c({variables:{from:n.from,to:n.to,roomNumbers:n.roomNumbers,bookedBy:n.bookedBy,paid:n.paid,amount:n.amount+20,people:n.people,room:n.room,hotel:n.hotel}}).then((t=>{d({variables:{tokenId:e.id,bookingId:t.data.addBooking.id,bookedBy:n.bookedBy}}).then((e=>{h(!1);let t=n;t.id=e.data.payAmount.id,t.paid=!0,l(`/payment/${o.hotel.id}/${o.id}/3`,{state:t})})).catch((e=>{h(!1),y.b.error(e.message,{autoClose:5500,pauseOnHover:!0})}))})).catch((e=>{h(!1),y.b.error(e.message,{autoClose:5500,pauseOnHover:!0})}))},stripeKey:"pk_test_51Hr13fE7BvSkBO4prE35EeVzyGVKfQCPfpfcOZZkSLfa4jfONQeEOrd9A4wFIERlRXuVpBu3NYVm1YwCrFfY0gs400dAaCrTp0",name:"",currency:"USD",amount:100*(n.amount+20)}),Object(r.jsx)(a.g,{className:"small",style:{marginTop:"16px",color:"grey"},children:"*You can also pay later"})]})]})}),Object(r.jsxs)(m,{className:"buttons",children:[Object(r.jsx)(a.a,{onClick:()=>l(`/payment/${o.hotel.id}/${o.id}/1`,{state:n}),children:"Go Back"}),Object(r.jsx)(a.a,{onClick:()=>(h(!0),void(i?l("/bookings"):c({variables:{from:n.from,to:n.to,roomNumbers:n.roomNumbers,bookedBy:n.bookedBy,paid:n.paid,amount:n.amount+20,people:n.people,room:n.room,hotel:n.hotel}}).then((e=>{let t=n;t.id=e.data.addBooking.id,l(`/payment/${o.hotel.id}/${o.id}/3`,{state:t})})).catch((e=>{h(!1),y.b.error(e,{autoClose:5500,pauseOnHover:!0})})))),disabled:p,children:"Pay Later"})]})]})};var C=e=>{const{user:t,room:o,booking:s}=e,n=Object(b.q)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(h,{children:[Object(r.jsx)("img",{src:"https://img.icons8.com/fluency/48/000000/ok.png",alt:"/",style:{marginRight:"10px"}}),Object(r.jsx)(a.g,{style:{margin:"0"},children:"Booking Confirmed"})]}),Object(r.jsxs)(m,{style:{marginTop:"20px"},children:[Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)(a.g,{children:"Customer Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Name: ",Object(r.jsx)("span",{children:t.name})]}),Object(r.jsxs)(a.g,{className:"small",children:["Email: ",Object(r.jsx)("span",{children:t.email})]}),Object(r.jsxs)(a.g,{className:"small",children:["Age: ",Object(r.jsx)("span",{children:Object(u.c)(t.dob)})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total: ",Object(r.jsx)("span",{children:s.people.adults+s.people.children})]}),Object(r.jsx)(a.g,{style:{marginTop:"20px"},children:"Booking Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Hotel: ",Object(r.jsx)("span",{children:o.hotel.name})]}),Object(r.jsxs)(a.g,{className:"small",children:["Room: ",Object(r.jsx)("span",{children:o.name})]}),Object(r.jsxs)(a.g,{className:"small",style:{margin:"-10px 0 10px 0"},children:["Room Number(s):",s.roomNumbers.map((e=>Object(r.jsx)("span",{className:"highlight",style:{margin:"4px 2px"},children:e})))]}),Object(r.jsxs)(a.g,{className:"small",children:["Price (Each room): ",Object(r.jsxs)("span",{children:["Rs. ",o.price]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total Cost: ",Object(r.jsxs)("span",{children:["Rs. ",s.amount]})]})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)(a.g,{children:"Payment Info"}),Object(r.jsxs)(a.g,{className:"small",children:["Room(s) Cost: ",Object(r.jsxs)("span",{children:["Rs. ",s.amount]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Tax: ",Object(r.jsxs)("span",{children:["Rs. ",20]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Total Cost: ",Object(r.jsxs)("span",{children:["Rs. ",s.amount+20]})]}),Object(r.jsxs)(a.g,{className:"small",children:["Payment Status: ",Object(r.jsx)("span",{children:s.paid?"Paid":"Not Paid"})]})]})]}),Object(r.jsx)(m,{className:"buttons",children:Object(r.jsx)(a.a,{onClick:()=>n("/bookings"),style:{marginLeft:"auto"},children:"Your Bookings"})})]})},w=o(59),R=o(120);t.default=()=>{const{setPage:e}=Object(s.useContext)(n.a);Object(s.useEffect)((()=>{e("Payment")}),[]);const{roomId:t,step:o}=Object(b.s)(),i=Object(b.o)(),{data:l,loading:c,error:d}=Object(g.a)(f.b,{variables:{id:t}});if(c)return Object(r.jsx)(w.a,{});if(d)return Object(r.jsx)(R.a,{error:d});if(!i.state)return Object(r.jsx)(b.a,{to:"/"});const u=JSON.parse(localStorage.getItem("user")),m=l.getRoom,h=i.state,x=void 0!==h.id;return h?Object(r.jsxs)(a.c,{children:[Object(r.jsx)(p,{step:o}),"1"===o&&Object(r.jsx)(j,{user:u,room:m,booking:h,bookingExists:x}),"2"===o&&Object(r.jsx)(S,{user:u,room:m,booking:h,bookingExists:x}),"3"===o&&Object(r.jsx)(C,{user:u,room:m,booking:h,bookingExists:x})]}):Object(r.jsx)(R.a,{error:{message:"Booking info not available."}})}}}]);