(this["webpackJsonpaplysia-app-client"]=this["webpackJsonpaplysia-app-client"]||[]).push([[8],{323:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return p})),a.d(t,"f",(function(){return b})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return j}));var o=a(347),i=a(371),n=a.n(i),r=a(44),s=a(372),c=a(373);const l=Object(s.a)({apiKey:"AIzaSyA3VHRbj4knFBXK3YVFdsr7xn2MvE1A0_E",authDomain:"hotel-booking-app-2c070.firebaseapp.com",projectId:"hotel-booking-app-2c070",storageBucket:"hotel-booking-app-2c070.appspot.com",messagingSenderId:"308536271440",appId:"1:308536271440:web:cf389c892a5fa653486755"}),d=Object(c.a)(l);var m=a(811);const u=e=>n()(e).format("DD/MM/YYYY"),g=e=>n()(e).format("Do MMMM, YYYY"),p=e=>{let t=n()(),a=n()(e).format("YYYY");return t.diff(a,"years")},b=async(e,t)=>{if(!e)return void alert("No file found.");const a=Object(o.d)(d,t),i=Object(o.e)(a,e);let n;return i.on("state_changed",(e=>{}),(e=>{r.b.error(e,{autoClose:5500,pauseOnHover:!0})}),(()=>{n=Object(o.b)(i.snapshot.ref)})),await Promise.resolve(i).then((async e=>await Promise.resolve(n).then((e=>e))))},h=async(e,t)=>{if(!e||0===e.length)return void alert("No file found.");const a=[];return await Promise.all(e.map((async(e,o)=>{const i=Object(m.a)();let n=`images/rooms/${t.id}/roomImage-${i}`,r=await b(e,n);a.push({url:r,uuid:i})}))),a},j=async(e,t)=>{await Promise.all(e.map((async(e,a)=>{const i=e.uuid,n=Object(o.d)(d,`images/rooms/${t}/roomImage-${i}`);await Object(o.a)(n)})))}},327:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"f",(function(){return r})),a.d(t,"g",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var o=a(10);const i=o.a.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000d1;
    z-index: 9999999
`,n=o.a.div`;
    width: 700px;
    max-height: 80vh;
    overflow-y: scroll;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    position: relative;
    .close-icon{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer
    }
    @media(max-width: 700px){
        width: calc(100vw - 40px);
    }
`,r=o.a.h3`
    font-weight: 26px;
    font-weight: 600;
    margin-bottom: 20px
`,s=o.a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    justify-content: center;
    row-gap: 16px;
    column-gap: 16px;
    div{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        cursor: pointer;
        border-radius: 4px;
    }
    .assigned{
        background: #ffadad
    }
    .selected{
        background: #8dffd0;
        border-color: green
    }
`,c=o.a.div`
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
`,l=o.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    background: #ffcdb8;
    height: 160px;
    .plus-icon{
        color: #9a9a9a !important;
        font-size: 40px !important;
    }
`,d=o.a.div`
    display: flex;
    justify-content: space-between
`},339:function(e,t,a){},374:function(e,t,a){"use strict";var o=a(0),i=a(20),n=a(10),r=a(444),s=a.n(r),c=(a(445),a(327)),l=a(61),d=a(64),m=a(448),u=a.n(m),g=a(446),p=a(447),b=a(1);const h=n.a.div`
    margin-bottom: 20px;
    background: #e2e2e2;
    border-radius: 4px;
    overflow: hidden;
`,j=n.a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
`,f=n.a.div`
    overflow: hidden;
    cursor: pointer;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 4px;
    background: #fff;
    &.selected{
        border: 2px solid #ff6e29;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    .delete-icon{
        position: absolute;
        bottom: 5px;
        right: 5px;
        background: white;
        padding: 4px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.1);
            background: #ff6e29;
            color: white;
        }
    }
    .progress-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
`,x=n.a.div`
    border: 2px dashed #ccc;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    background: #f8f8f8;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        border-color: #ff6e29;
        background: #fff;
    }
    &.drag-active {
        border-color: #ff6e29;
        background: #fff5f0;
    }
`;t.a=e=>{let{setImageURL:t,imageUrl:a,data:n,styles:r,setSelected:m,selected:O,maxImages:v=5,maxSize:y=5,allowedTypes:w=["image/jpeg","image/png","image/webp"]}=e;const $=Object(o.useRef)(null),[S,k]=Object(o.useState)(a||d.a),[C,H]=Object(o.useState)(!1),[R,I]=Object(o.useState)(null),[M,N]=Object(o.useState)({unit:"px",x:130,y:50,width:160,height:90,aspect:16/9}),[D,U]=Object(o.useState)(""),[Y,P]=Object(o.useState)(!1),[B,L]=Object(o.useState)({}),A=async e=>{if((e=>w.includes(e.type)?!(e.size>1024*y*1024)||(g.toast.error(`\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 ${y}MB`),!1):(g.toast.error(`\u4e0d\u652f\u6301\u7684\u6587\u4ef6\u7c7b\u578b\u3002\u652f\u6301\u7684\u7c7b\u578b: ${w.join(", ")}`),!1))(e)){L({[e.name]:0});try{const t=await(async e=>{const t={maxSizeMB:y,maxWidthOrHeight:1920,useWebWorker:!0};try{return await Object(p.a)(e,t)}catch(a){return console.error("\u56fe\u7247\u538b\u7f29\u5931\u8d25:",a),e}})(e);k(URL.createObjectURL(t)),H(!0);let a=0;const o=setInterval((()=>{a+=10,L((t=>({...t,[e.name]:a}))),a>=100&&(clearInterval(o),setTimeout((()=>{L((t=>{const a={...t};return delete a[e.name],a}))}),1e3))}),100)}catch(t){g.toast.error("\u6587\u4ef6\u5904\u7406\u5931\u8d25: "+t.message)}}},J=e=>{e.preventDefault(),P(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&A(e.dataTransfer.files[0])},T=e=>{e.preventDefault(),P(!0)},z=e=>{e.preventDefault(),P(!1)};return Object(b.jsxs)(h,{children:[C&&Object(b.jsx)(c.e,{children:Object(b.jsx)(c.d,{children:S&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{src:S,onImageLoaded:I,crop:M,onChange:N,style:{maxHeight:"70vh"}}),Object(b.jsxs)(l.b,{children:[Object(b.jsx)(i.a,{onClick:()=>H(!1),children:"\u53d6\u6d88"}),Object(b.jsx)(i.a,{onClick:e=>{e.preventDefault();const a=document.createElement("canvas"),o=R.naturalWidth/R.width,i=R.naturalHeight/R.height;a.width=M.width,a.height=M.height;a.getContext("2d").drawImage(R,M.x*o,M.y*i,M.width*o,M.height*i,0,0,M.width,M.height);const n=a.toDataURL("image/jpeg");U(n),t(function(e,t){for(var a=e.split(","),o=a[0].match(/:(.*?);/)[1],i=atob(a[a.length-1]),n=i.length,r=new Uint8Array(n);n--;)r[n]=i.charCodeAt(n);return new File([r],t,{type:o})}(n,"cropped.jpg")),H(!1)},children:"\u88c1\u526a\u5e76\u4e0a\u4f20"})]})]})})}),Object(b.jsx)(j,{children:Array.from({length:v}).map(((e,t)=>Object(b.jsxs)(f,{className:null!==O&&void 0!==O&&O.includes(null===n||void 0===n?void 0:n.uuid)?"selected":"",onClick:()=>!a&&$.current.click(),children:[D||a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:D||a,alt:""}),Object(b.jsx)(u.a,{className:"delete-icon",onClick:e=>{e.stopPropagation(),null===m||void 0===m||m(null===n||void 0===n?void 0:n.uuid)}})]}):Object(b.jsxs)(x,{className:Y?"drag-active":"",onDrop:J,onDragOver:T,onDragLeave:z,children:[Object(b.jsx)("p",{children:"\u70b9\u51fb\u6216\u62d6\u62fd\u56fe\u7247\u5230\u6b64\u5904"}),Object(b.jsxs)("small",{children:["\u652f\u6301 JPG, PNG, WebP (\u6700\u5927 ",y,"MB)"]})]}),void 0!==B[`image-${t}`]&&Object(b.jsxs)("div",{className:"progress-overlay",children:[B[`image-${t}`],"%"]})]},t)))}),Object(b.jsx)(i.c,{type:"file",accept:w.join(","),onChange:e=>A(e.target.files[0]),style:{display:"none"},ref:$})]})}},441:function(e,t,a){"use strict";var o=a(317),i=a(0),n=a(20),r=a(327),s=a(44),c=(a(144),a(342)),l=a.n(c),d=(a(339),a(98)),m=a(47);const u=m.a`
mutation($image: String, $name: String!, $description: String!, $totalRooms: Int!, $location: String!, $manager: ID!){
    addHotel(manager: $manager, image: $image, name: $name, description: $description, totalRooms: $totalRooms, location: $location){
      id
      name
      description
    }
  }
`,g=m.a`
mutation($id: ID!, $image: String, $name: String!, $description: String!, $ratings: Int, $totalRooms: Int!, $location: String!){
    updateHotel(id: $id, image: $image, name: $name, description: $description, ratings: $ratings, totalRooms: $totalRooms, location: $location){
      id
      name
    }
  }
`;var p=a(374),b=a(323),h=a(97),j=a(99),f=a(1);t.a=e=>{var t;const a=e.hotel,c=JSON.parse(localStorage.getItem("user")),[m,x]=Object(i.useState)(!1),[O,v]=Object(i.useState)(!1),[y,w]=Object(i.useState)({name:a?a.name:"",description:a?a.description:"",id:e.hotel?e.hotel.id:null,image:a?a.image:"",ratings:a?a.ratings:null,totalRooms:a?a.totalRooms:null,location:a?a.location:""}),[$]=Object(o.a)(j.b,{variables:{id:c.id}}),[S]=Object(o.a)(u),[k]=Object(o.a)(g,{refetchQueries:[d.a,{variables:{id:null===(t=e.hotel)||void 0===t?void 0:t.id}}]});return Object(f.jsx)(r.e,{children:Object(f.jsx)(r.d,{className:"modal-box",children:O?Object(f.jsx)(h.a,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{className:"close-icon",onClick:()=>e.setHotelModal(!1)}),Object(f.jsx)(r.f,{children:e.title}),Object(f.jsx)(p.a,{imageUrl:y.image,refPath:`images/hotels/${y.id}/hotelImage`,setImageURL:e=>w({...y,image:e}),single:!0}),Object(f.jsxs)("form",{onSubmit:"update"===e.action?async t=>{t.preventDefault(),v(!0);const o=Object.keys(a.roomsMap).length;if(o>y.totalRooms)return void s.b.warning(`You have already assigned ${o} rooms. Unassign those rooms to decrease room numbers.`,{autoClose:5500,pauseOnHover:!0});const i=`images/hotels/${y.id}/hotelImage`;let n=null;"string"!==typeof y.image&&(n=await Object(b.f)(y.image,i)),k({variables:{name:y.name,description:y.description,id:y.id,image:n||y.image,ratings:y.ratings,totalRooms:y.totalRooms,location:y.location}}).then((t=>{s.b.success("Updated hotel.",{autoClose:5500,pauseOnHover:!0,onClose:e.setHotelModal(!1)}),x(!0),v(!1)})).catch((e=>{s.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),v(!1)}))}:async t=>{t.preventDefault(),v(!0),S({variables:{manager:c.id,image:null,name:y.name,description:y.description,totalRooms:y.totalRooms,location:y.location}}).then((async t=>{const a=`images/hotels/${t.data.addHotel.id}/hotelImage`;let o=null;"string"!==typeof y.image&&(o=await Object(b.f)(y.image,a)),k({variables:{name:y.name,description:y.description,id:t.data.addHotel.id,image:o,ratings:t.data.addHotel.ratings,totalRooms:y.totalRooms,location:y.location}}).then((t=>{s.b.success("Hotel added.",{autoClose:5500,pauseOnHover:!0}),$({variables:{id:c.id}}).then((t=>{localStorage.setItem("user",JSON.stringify(t.data.makeManager)),x(!0),v(!1),e.setHotelModal(!1)})).catch((e=>{s.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),v(!1)}))})).catch((e=>{s.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),v(!1)}))})).catch((e=>{s.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),v(!0)}))},children:[Object(f.jsx)(n.c,{required:"true",style:{marginBottom:"16px"},value:y.name,onChange:e=>w({...y,name:e.target.value}),placeholder:"Hotel name"}),Object(f.jsx)(n.e,{required:"true",style:{marginBottom:"16px"},value:y.description,onChange:e=>w({...y,description:e.target.value}),placeholder:"Hotel description"}),Object(f.jsx)(n.c,{required:"true",style:{marginBottom:"16px"},value:y.location,onChange:e=>w({...y,location:e.target.value}),placeholder:"Location"}),Object(f.jsx)(n.c,{required:"true",style:{marginBottom:"16px"},value:y.totalRooms,onChange:e=>w({...y,totalRooms:Number(e.target.value)}),placeholder:"Total Rooms"}),!m&&Object(f.jsx)(n.a,{type:"submit",style:{marginLeft:"auto",marginTop:"40px"},children:e.title})]})]})})})}},807:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a(11),n=a(29),r=a(10),s=a(20),c=a(323),l=a(87),d=a.n(l),m=(a(146),a(441)),u=a(317),g=a(151),p=a(99),b=a(44),h=a(1);const j=r.a.div`
    margin-bottom: 16px;
    width: 100%;
    &.flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .first{
            margin-right: 16px
        }
    }
    label{
        display: block;
        margin-bottom: 10px
    }
`,f=r.a.div`
    position: absolute;
    top: -20px;
    right: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background: #4158ff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #fff;
`;t.default=()=>{const{setPage:e}=Object(o.useContext)(n.a),t=JSON.parse(localStorage.getItem("user")),[a,r]=Object(o.useState)({state:!1,title:"",param:null,action:""}),[l,x]=Object(o.useState)(!1),[O,v]=Object(o.useState)(t);Object(o.useEffect)((()=>{e("Profile")}),[e]);const[y]=Object(u.a)(p.d,{refetchQueries:[g.a,{variables:{id:t.id}}]});Object(o.useEffect)((()=>{O.name!==t.name||O.email!==t.email||O.dob!==t.dob?x(!0):x(!1)}),[O,t]);return Object(h.jsxs)(i.c,{style:{maxWidth:"800px",marginLeft:"auto",marginRight:"auto"},children:[a.state&&Object(h.jsx)(m.a,{action:a.action,title:a.title,hotel:null,setHotelModal:r}),Object(h.jsxs)(i.g,{style:{position:"relative",width:"fit-content"},children:["Hello ",t.name,t.isManager&&Object(h.jsx)(f,{children:"M"})]}),Object(h.jsxs)(i.g,{className:"small",style:{marginBottom:"8px"},children:["Joined on ",Object(c.e)(t.joined)]}),Object(h.jsxs)(i.g,{className:"small",children:["Type: ",t.isManager?"Hotel Manager":t.isAdmin?"Admin":"User"]}),t.isManager?null:Object(h.jsx)(s.a,{style:{margin:"16px 0",borderRadius:"2px"},onClick:()=>r({state:!0,title:"Add Hotel",params:null,action:"add"}),children:"Add My Hotel"}),Object(h.jsxs)(j,{className:"flex",children:[Object(h.jsxs)(j,{className:"first",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)(s.c,{value:O.name,onChange:e=>v({...O,name:e.target.value})})]}),Object(h.jsxs)(j,{children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)(s.c,{value:t.username})]})]}),Object(h.jsxs)(j,{className:"flex",children:[Object(h.jsxs)(j,{className:"first",children:[Object(h.jsx)("label",{children:"E-Mail"}),Object(h.jsx)(s.c,{value:O.email,onChange:e=>v({...O,email:e.target.value})})]}),Object(h.jsxs)(j,{children:[Object(h.jsx)("label",{children:"DOB"}),Object(h.jsx)(d.a,{selected:new Date(O.dob),onChange:e=>v({...O,dob:e})})]})]}),l?Object(h.jsx)(s.a,{style:{marginLeft:"auto"},onClick:()=>{y({variables:{id:"",name:O.name,email:O.email,dob:O.dob,username:O.username}}).then((e=>{x(!1),localStorage.setItem("user",JSON.stringify(e.data.updateProfile)),b.b.success("User details updated.",{autoClose:5500,pauseOnHover:!0})})).catch((e=>{x(!1),b.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),v(t)}))},children:"Update & Save"}):null]})}}}]);