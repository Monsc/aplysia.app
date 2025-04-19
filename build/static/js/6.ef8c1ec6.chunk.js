(this["webpackJsonpaplysia-app-client"]=this["webpackJsonpaplysia-app-client"]||[]).push([[6],{323:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return j})),a.d(t,"c",(function(){return b})),a.d(t,"f",(function(){return u})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return g}));var o=a(347),s=a(371),i=a.n(s),n=a(44),r=a(372),c=a(373);const l=Object(r.a)({apiKey:"AIzaSyA3VHRbj4knFBXK3YVFdsr7xn2MvE1A0_E",authDomain:"hotel-booking-app-2c070.firebaseapp.com",projectId:"hotel-booking-app-2c070",storageBucket:"hotel-booking-app-2c070.appspot.com",messagingSenderId:"308536271440",appId:"1:308536271440:web:cf389c892a5fa653486755"}),d=Object(c.a)(l);var m=a(811);const p=e=>i()(e).format("DD/MM/YYYY"),j=e=>i()(e).format("Do MMMM, YYYY"),b=e=>{let t=i()(),a=i()(e).format("YYYY");return t.diff(a,"years")},u=async(e,t)=>{if(!e)return void alert("No file found.");const a=Object(o.d)(d,t),s=Object(o.e)(a,e);let i;return s.on("state_changed",(e=>{}),(e=>{n.b.error(e,{autoClose:5500,pauseOnHover:!0})}),(()=>{i=Object(o.b)(s.snapshot.ref)})),await Promise.resolve(s).then((async e=>await Promise.resolve(i).then((e=>e))))},h=async(e,t)=>{if(!e||0===e.length)return void alert("No file found.");const a=[];return await Promise.all(e.map((async(e,o)=>{const s=Object(m.a)();let i=`images/rooms/${t.id}/roomImage-${s}`,n=await u(e,i);a.push({url:n,uuid:s})}))),a},g=async(e,t)=>{await Promise.all(e.map((async(e,a)=>{const s=e.uuid,i=Object(o.d)(d,`images/rooms/${t}/roomImage-${s}`);await Object(o.a)(i)})))}},327:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var o=a(10);const s=o.a.div`
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
`,i=o.a.div`;
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
`,n=o.a.h3`
    font-weight: 26px;
    font-weight: 600;
    margin-bottom: 20px
`,r=o.a.div`
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
`},339:function(e,t,a){},349:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));var o=a(47);const s=o.a`
query($id: ID!){
    getUserBookings(id: $id){
        id
        from
        to
        days
        paid
        amount
        bookedOn
        people{
            children
            adults
        }
        roomNumbers
        numOfPeople
        location
        bookedBy{
            name
            email
            username
            id
        }
        hotel{
            id
            name
            location
        }
        room{
            id
            name
            price
            others
        }
    }
}
`,i=o.a`
query($id: ID!){
    getHotelBookings(id: $id){
        id
        from
        to
        days
        paid
        amount
        bookedOn
        people{
            children
            adults
        }
        roomNumbers
        numOfPeople
        location
        bookedBy{
            name
            email
            username
            id
        }
        hotel{
            id
            name
            location
        }
        room{
            id
            name
            price
            others
        }
    }
}
`;o.a`
    query($id: ID!){
        getBooking(id: id){
            id
        from
        to
        days
        paid
        amount
        bookedOn
        people{
            children
            adults
        }
        roomNumbers
        numOfPeople
        location
        bookedBy{
            name
            email
            username
            id
        }
        hotel{
            id
            name
            location
        }
        room{
            id
            name
            price
            others
        }
        }
    }
`},358:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var o=a(10);const s=o.a.div`
  height: 58px;
  border: 1px solid #d2d2d2;
  padding: 8px 10px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  margin-bottom: 10px;

  &.normal-col{
    @media(max-width: 700px) {
      display: none;
    }
  }

  &.responsive-col{
    display: none;
    grid-template-columns: 0.5fr 1fr !important;

    @media(max-width: 700px) {
      display: grid;
    }
  }

  
`,i=o.a.p`
  margin: 0 !important;
  text-align: center;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  :first-child{
    text-align: left;
  }
  p{
    width: fit-content;
    margin: 0
  }
`,n=o.a.button`
  width: 40px;
  height: 40px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d2d2d2;
  border-radius: 4px !important;
  outline: 0;
  margin: 0 6px !important;
  background: transparent;
  cursor: pointer
`,r=o.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var o=a(47);const s=o.a`
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
`,i=o.a`
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
`},370:function(e,t,a){"use strict";a(0),a(398);var o=a(20),s=a(1);t.a=e=>Object(s.jsx)("div",{className:"search-bar",children:Object(s.jsx)(o.c,{placeholder:e.placeholder,value:e.query,onChange:t=>e.setQuery(t.target.value)})})},374:function(e,t,a){"use strict";var o=a(0),s=a(20),i=a(10),n=a(444),r=a.n(n),c=(a(445),a(327)),l=a(61),d=a(64),m=a(448),p=a.n(m),j=a(446),b=a(447),u=a(1);const h=i.a.div`
    margin-bottom: 20px;
    background: #e2e2e2;
    border-radius: 4px;
    overflow: hidden;
`,g=i.a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
`,x=i.a.div`
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
`,O=i.a.div`
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
`;t.a=e=>{let{setImageURL:t,imageUrl:a,data:i,styles:n,setSelected:m,selected:f,maxImages:y=5,maxSize:v=5,allowedTypes:k=["image/jpeg","image/png","image/webp"]}=e;const w=Object(o.useRef)(null),[$,N]=Object(o.useState)(a||d.a),[C,R]=Object(o.useState)(!1),[S,D]=Object(o.useState)(null),[B,I]=Object(o.useState)({unit:"px",x:130,y:50,width:160,height:90,aspect:16/9}),[M,H]=Object(o.useState)(""),[L,P]=Object(o.useState)(!1),[U,Y]=Object(o.useState)({}),T=async e=>{if((e=>k.includes(e.type)?!(e.size>1024*v*1024)||(j.toast.error(`\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 ${v}MB`),!1):(j.toast.error(`\u4e0d\u652f\u6301\u7684\u6587\u4ef6\u7c7b\u578b\u3002\u652f\u6301\u7684\u7c7b\u578b: ${k.join(", ")}`),!1))(e)){Y({[e.name]:0});try{const t=await(async e=>{const t={maxSizeMB:v,maxWidthOrHeight:1920,useWebWorker:!0};try{return await Object(b.a)(e,t)}catch(a){return console.error("\u56fe\u7247\u538b\u7f29\u5931\u8d25:",a),e}})(e);N(URL.createObjectURL(t)),R(!0);let a=0;const o=setInterval((()=>{a+=10,Y((t=>({...t,[e.name]:a}))),a>=100&&(clearInterval(o),setTimeout((()=>{Y((t=>{const a={...t};return delete a[e.name],a}))}),1e3))}),100)}catch(t){j.toast.error("\u6587\u4ef6\u5904\u7406\u5931\u8d25: "+t.message)}}},q=e=>{e.preventDefault(),P(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&T(e.dataTransfer.files[0])},A=e=>{e.preventDefault(),P(!0)},z=e=>{e.preventDefault(),P(!1)};return Object(u.jsxs)(h,{children:[C&&Object(u.jsx)(c.e,{children:Object(u.jsx)(c.d,{children:$&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{src:$,onImageLoaded:D,crop:B,onChange:I,style:{maxHeight:"70vh"}}),Object(u.jsxs)(l.b,{children:[Object(u.jsx)(s.a,{onClick:()=>R(!1),children:"\u53d6\u6d88"}),Object(u.jsx)(s.a,{onClick:e=>{e.preventDefault();const a=document.createElement("canvas"),o=S.naturalWidth/S.width,s=S.naturalHeight/S.height;a.width=B.width,a.height=B.height;a.getContext("2d").drawImage(S,B.x*o,B.y*s,B.width*o,B.height*s,0,0,B.width,B.height);const i=a.toDataURL("image/jpeg");H(i),t(function(e,t){for(var a=e.split(","),o=a[0].match(/:(.*?);/)[1],s=atob(a[a.length-1]),i=s.length,n=new Uint8Array(i);i--;)n[i]=s.charCodeAt(i);return new File([n],t,{type:o})}(i,"cropped.jpg")),R(!1)},children:"\u88c1\u526a\u5e76\u4e0a\u4f20"})]})]})})}),Object(u.jsx)(g,{children:Array.from({length:y}).map(((e,t)=>Object(u.jsxs)(x,{className:null!==f&&void 0!==f&&f.includes(null===i||void 0===i?void 0:i.uuid)?"selected":"",onClick:()=>!a&&w.current.click(),children:[M||a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:M||a,alt:""}),Object(u.jsx)(p.a,{className:"delete-icon",onClick:e=>{e.stopPropagation(),null===m||void 0===m||m(null===i||void 0===i?void 0:i.uuid)}})]}):Object(u.jsxs)(O,{className:L?"drag-active":"",onDrop:q,onDragOver:A,onDragLeave:z,children:[Object(u.jsx)("p",{children:"\u70b9\u51fb\u6216\u62d6\u62fd\u56fe\u7247\u5230\u6b64\u5904"}),Object(u.jsxs)("small",{children:["\u652f\u6301 JPG, PNG, WebP (\u6700\u5927 ",v,"MB)"]})]}),void 0!==U[`image-${t}`]&&Object(u.jsxs)("div",{className:"progress-overlay",children:[U[`image-${t}`],"%"]})]},t)))}),Object(u.jsx)(s.c,{type:"file",accept:k.join(","),onChange:e=>T(e.target.files[0]),style:{display:"none"},ref:w})]})}},398:function(e,t,a){},441:function(e,t,a){"use strict";var o=a(317),s=a(0),i=a(20),n=a(327),r=a(44),c=(a(144),a(342)),l=a.n(c),d=(a(339),a(98)),m=a(47);const p=m.a`
mutation($image: String, $name: String!, $description: String!, $totalRooms: Int!, $location: String!, $manager: ID!){
    addHotel(manager: $manager, image: $image, name: $name, description: $description, totalRooms: $totalRooms, location: $location){
      id
      name
      description
    }
  }
`,j=m.a`
mutation($id: ID!, $image: String, $name: String!, $description: String!, $ratings: Int, $totalRooms: Int!, $location: String!){
    updateHotel(id: $id, image: $image, name: $name, description: $description, ratings: $ratings, totalRooms: $totalRooms, location: $location){
      id
      name
    }
  }
`;var b=a(374),u=a(323),h=a(97),g=a(99),x=a(1);t.a=e=>{var t;const a=e.hotel,c=JSON.parse(localStorage.getItem("user")),[m,O]=Object(s.useState)(!1),[f,y]=Object(s.useState)(!1),[v,k]=Object(s.useState)({name:a?a.name:"",description:a?a.description:"",id:e.hotel?e.hotel.id:null,image:a?a.image:"",ratings:a?a.ratings:null,totalRooms:a?a.totalRooms:null,location:a?a.location:""}),[w]=Object(o.a)(g.b,{variables:{id:c.id}}),[$]=Object(o.a)(p),[N]=Object(o.a)(j,{refetchQueries:[d.a,{variables:{id:null===(t=e.hotel)||void 0===t?void 0:t.id}}]});return Object(x.jsx)(n.e,{children:Object(x.jsx)(n.d,{className:"modal-box",children:f?Object(x.jsx)(h.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{className:"close-icon",onClick:()=>e.setHotelModal(!1)}),Object(x.jsx)(n.f,{children:e.title}),Object(x.jsx)(b.a,{imageUrl:v.image,refPath:`images/hotels/${v.id}/hotelImage`,setImageURL:e=>k({...v,image:e}),single:!0}),Object(x.jsxs)("form",{onSubmit:"update"===e.action?async t=>{t.preventDefault(),y(!0);const o=Object.keys(a.roomsMap).length;if(o>v.totalRooms)return void r.b.warning(`You have already assigned ${o} rooms. Unassign those rooms to decrease room numbers.`,{autoClose:5500,pauseOnHover:!0});const s=`images/hotels/${v.id}/hotelImage`;let i=null;"string"!==typeof v.image&&(i=await Object(u.f)(v.image,s)),N({variables:{name:v.name,description:v.description,id:v.id,image:i||v.image,ratings:v.ratings,totalRooms:v.totalRooms,location:v.location}}).then((t=>{r.b.success("Updated hotel.",{autoClose:5500,pauseOnHover:!0,onClose:e.setHotelModal(!1)}),O(!0),y(!1)})).catch((e=>{r.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),y(!1)}))}:async t=>{t.preventDefault(),y(!0),$({variables:{manager:c.id,image:null,name:v.name,description:v.description,totalRooms:v.totalRooms,location:v.location}}).then((async t=>{const a=`images/hotels/${t.data.addHotel.id}/hotelImage`;let o=null;"string"!==typeof v.image&&(o=await Object(u.f)(v.image,a)),N({variables:{name:v.name,description:v.description,id:t.data.addHotel.id,image:o,ratings:t.data.addHotel.ratings,totalRooms:v.totalRooms,location:v.location}}).then((t=>{r.b.success("Hotel added.",{autoClose:5500,pauseOnHover:!0}),w({variables:{id:c.id}}).then((t=>{localStorage.setItem("user",JSON.stringify(t.data.makeManager)),O(!0),y(!1),e.setHotelModal(!1)})).catch((e=>{r.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),y(!1)}))})).catch((e=>{r.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),y(!1)}))})).catch((e=>{r.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),y(!0)}))},children:[Object(x.jsx)(i.c,{required:"true",style:{marginBottom:"16px"},value:v.name,onChange:e=>k({...v,name:e.target.value}),placeholder:"Hotel name"}),Object(x.jsx)(i.e,{required:"true",style:{marginBottom:"16px"},value:v.description,onChange:e=>k({...v,description:e.target.value}),placeholder:"Hotel description"}),Object(x.jsx)(i.c,{required:"true",style:{marginBottom:"16px"},value:v.location,onChange:e=>k({...v,location:e.target.value}),placeholder:"Location"}),Object(x.jsx)(i.c,{required:"true",style:{marginBottom:"16px"},value:v.totalRooms,onChange:e=>k({...v,totalRooms:Number(e.target.value)}),placeholder:"Total Rooms"}),!m&&Object(x.jsx)(i.a,{type:"submit",style:{marginLeft:"auto",marginTop:"40px"},children:e.title})]})]})})})}},564:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a(11),i=a(10),n=a(370),r=a(97),c=a(317),l=a(44),d=a(358),m=a(359),p=a(349),j=a(323),b=a(401),u=a.n(b),h=a(400),g=a.n(h),x=a(1);const O=i.a.div`
    background: white;
    box-shadow: 2px 3px 7px 0px #66666682;
    padding: 14px;
    border-radius: 6px;
    max-width: 100%;

    .details {
        margin-top: 16px;
        
        p {
            text-align: start;
            font-size: 14px;
            color: grey
        }
    }

    .payment-status {
        padding: 6px;
        border-radius: 4px;
        background: #f16d59;
        text-align: start;
        font-size: 14px;
        width: fit-content;
        margin-top: 6px !important;
        color: #fff;

        &.paid{
            background: #5fffc5;
            color: #008d5a
        }
    }
    
    
`;var f=e=>{const{hotel:t,room:a,from:o,to:s,bookedOn:i,amount:n,paid:r}=e.data,[b]=Object(c.a)(m.b);return Object(x.jsxs)(O,{children:[Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)(d.d,{style:{fontSize:"20px",fontWeight:"bold"},children:[t.location,", ",t.name]}),Object(x.jsx)(d.d,{className:"payment-status "+(r?"paid":""),children:r?"Paid":"Not Paid"})]}),Object(x.jsxs)(d.a,{style:{justifyContent:"flex-end"},children:[Object(x.jsx)(d.b,{style:{background:"#ff6e29"},onClick:()=>e.setModal({state:!0,param:e.data,title:"Booking Details"}),children:Object(x.jsx)(g.a,{style:{color:"#fff"}})}),!e.isOld&&Object(x.jsx)(d.b,{style:{background:"#ff6e29"},onClick:()=>{e.setLoading(!0),b({variables:{id:e.data.id},refetchQueries:[p.b,{variables:{id:e.data.bookedBy.id}}]}).then((t=>{e.setLoading(!1),l.b.success("Canceled booking.",{autoClose:5500,pauseOnHover:!0})})).catch((t=>{e.setLoading(!1),l.b.error(t.message,{autoClose:5500,pauseOnHover:!0})}))},children:Object(x.jsx)(u.a,{style:{color:"#fff"}})})]})]}),Object(x.jsxs)("div",{className:"details",children:[Object(x.jsx)(d.d,{children:a.name}),Object(x.jsxs)(d.d,{children:["From ",Object(j.d)(o)," - To ",Object(j.d)(s)]}),Object(x.jsxs)(d.d,{children:["Booked On: ",Object(j.d)(i)]}),Object(x.jsxs)(d.d,{children:["Amount: Rs. ",n]})]})]})},y=a(327);const v=i.a.div`
    margin-top: 20px;

    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

        @media(max-width: 375px){
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
    }

`;var k=e=>{const[t,a]=Object(o.useState)(""),[i,c]=Object(o.useState)(!1),l=(new Date).setHours(0,0,0,0);let d=e.bookings?e.bookings.filter((e=>new Date(e.from)>l)):[],m=e.bookings?e.bookings.filter((e=>new Date(e.from)<=l)):[];return d=d.filter((e=>e.hotel.name.toLowerCase().includes(t.toString().toLowerCase()))),m=m.filter((e=>e.hotel.name.toLowerCase().includes(t.toString().toLowerCase()))),Object(x.jsxs)(v,{children:[Object(x.jsx)(n.a,{query:t,setQuery:a,placeholder:"Search bookings by hotel names..."}),Object(x.jsx)(s.g,{style:{fontSize:"20px",margin:"26px 0"},children:"Upcoming Bookings"}),Object(x.jsx)(y.c,{className:"grid-container",children:i?Object(x.jsx)(r.a,{}):d.map((t=>Object(x.jsx)(f,{data:t,setLoading:c,loading:i,setModal:e.setModal},t.id)))}),0===d.length&&Object(x.jsx)(s.g,{className:"small",style:{textAlign:"center",marginTop:"20px"},children:"No Bookings"}),Object(x.jsx)("br",{}),Object(x.jsx)(s.g,{style:{fontSize:"20px",margin:"26px 0"},children:"Old Bookings"}),Object(x.jsx)(y.c,{className:"grid-container",children:i?Object(x.jsx)(r.a,{}):m.map((t=>Object(x.jsx)(f,{data:t,setLoading:c,loading:i,setModal:e.setModal,isOld:!0},t.id)))}),0===m.length&&Object(x.jsx)(s.g,{className:"small",style:{textAlign:"center",marginTop:"20px"},children:"No Bookings"})]})},w=a(29),$=a(314),N=a(59),C=a(120),R=a(20),S=(a(144),a(342)),D=a.n(S),B=(a(339),a(145)),I=a(61),M=a(8);var H=e=>{const t=e.booking,a=Object(M.q)();return Object(x.jsx)(y.e,{children:Object(x.jsxs)(y.d,{className:"modal-box",children:[Object(x.jsx)(D.a,{className:"close-icon",onClick:()=>e.setModal({state:!1,param:null,title:""})}),Object(x.jsx)(y.f,{children:e.title}),Object(x.jsx)("br",{}),Object(x.jsxs)(s.g,{className:"small",children:["Booked By: ",Object(x.jsx)("span",{children:t.bookedBy.name})]}),Object(x.jsxs)(s.g,{className:"small",children:["Username: ",Object(x.jsx)("span",{children:t.bookedBy.username})]}),Object(x.jsx)(B.a,{interactive:!0,content:Object(j.e)(t.bookedOn),placement:"bottom",children:Object(x.jsxs)(s.g,{className:"small",children:["Booked On: ",Object(x.jsx)("span",{children:Object(j.d)(t.bookedOn)})]})}),Object(x.jsx)("hr",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(y.b,{children:[Object(x.jsxs)("div",{style:{flexBasis:"46%"},children:[Object(x.jsxs)(s.g,{className:"small",children:["Hotel: ",Object(x.jsx)("span",{children:t.hotel.name})]}),Object(x.jsxs)(s.g,{className:"small",children:["Location: ",Object(x.jsx)("span",{children:t.location})]}),Object(x.jsxs)(s.g,{className:"small",children:["Room: ",Object(x.jsx)("span",{children:t.room.name})]}),Object(x.jsx)(B.a,{interactive:!0,content:Object(j.e)(t.from),placement:"bottom",children:Object(x.jsxs)(s.g,{className:"small",children:["From: ",Object(x.jsx)("span",{children:Object(j.d)(t.from)})]})}),Object(x.jsx)(B.a,{interactive:!0,content:Object(j.e)(t.to),placement:"bottom",children:Object(x.jsxs)(s.g,{className:"small",children:["To: ",Object(x.jsx)("span",{children:Object(j.d)(t.to)})]})}),Object(x.jsxs)(s.g,{className:"small",children:["Duration:",Object(x.jsxs)("span",{children:[" ",t.days," ",1===t.days?"Day":"Days"]})]})]}),Object(x.jsxs)("div",{style:{flexBasis:"46%"},children:[Object(x.jsxs)(s.g,{className:"small",children:["Rooms:",t.roomNumbers.map((e=>Object(x.jsx)("span",{className:"highlight",style:{margin:"4px 2px"},children:e})))]}),Object(x.jsxs)(s.g,{className:"small",children:["Number of persons: ",Object(x.jsx)("span",{children:t.numOfPeople})]}),Object(x.jsxs)(s.g,{className:"small",children:["Adults: ",Object(x.jsx)("span",{children:t.people.adults})]}),Object(x.jsxs)(s.g,{className:"small",children:["Children: ",Object(x.jsx)("span",{children:t.people.children})]})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("hr",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(s.g,{className:"small",children:["Room Price: ",Object(x.jsxs)("span",{children:["Rs. ",t.room.price]})]}),Object(x.jsxs)(s.g,{className:"small",children:["Amount ",t.paid?"Paid":"To Be Paid",": ",Object(x.jsxs)("span",{children:["Rs. ",t.amount]})]}),Object(x.jsxs)(s.g,{className:"small",children:["Payment Status:",Object(x.jsxs)("span",{children:[" ",t.paid?"Paid":"Not Paid"]})]}),Object(x.jsxs)(I.b,{children:[Object(x.jsx)(R.a,{children:"View Hotel & Room"}),t.paid?null:Object(x.jsx)(R.a,{onClick:()=>{a(`/payment/${t.hotel.id}/${t.room.id}/1`,{state:t})},children:"Pay Now"})]})]})})};t.default=e=>{const{style:t,bookingsData:a}=e,{setPage:i}=Object(o.useContext)(w.a);Object(o.useEffect)((()=>{i("Bookings")}),[]);const[n,r]=Object(o.useState)({state:!1,title:"",param:null,action:""}),c=JSON.parse(localStorage.getItem("user")),{data:l,loading:d,error:m}=Object($.a)(p.b,{variables:{id:c.id}});if(d)return Object(x.jsx)(N.a,{});if(m)return Object(x.jsx)(C.a,{error:m});const j=a||l.getUserBookings;return Object(x.jsxs)(s.c,{style:t,children:[n.state?Object(x.jsx)(H,{booking:n.param,setModal:r,title:n.title}):null,Object(x.jsx)(k,{bookings:j,setModal:r,modal:n})]})}},570:function(e,t,a){},809:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a(10),i=a(29),n=a(11),r=a(97),c=a(370),l=a(1);const d=s.a.div`
    margin-top: 20px;
    display: grid;
    align-items: center;
    padding: 10px;
    p{
      text-align: center;
      margin: 0 !important;
      font-weight: bold
    }
    p:first-child{
      text-align: left
    }

    &.normal-col{
      @media(max-width: 700px) {
        display: none;
      }
    }
  
    &.responsive-col{
      display: none;
      grid-template-columns: 0.5fr 1fr !important;
  
      @media(max-width: 700px) {
        display: grid;
      }
    }
`;var m=e=>{let{list:t}=e;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{style:{gridTemplateColumns:`repeat(${t.length}, 1fr)`},className:"normal-col",children:t.map((e=>Object(l.jsx)("p",{children:e})))}),Object(l.jsxs)(d,{className:"responsive-col",children:[Object(l.jsx)("p",{children:t[0]}),Object(l.jsx)("p",{children:t[t.length-1]})]})]})},p=a(145),j=(a(176),a(323)),b=a(358),u=a(8),h=a(317),g=a(47);const x=g.a`
mutation($hotel: ID!, $images: [image]!, $name: String!, $description: String!, $others: [String]!, $occupancy: Int!, $price: Int!, $roomNumbers: [Int]!){
    addRoom(hotel: $hotel, images: $images, name: $name, description: $description, others: $others, occupancy: $occupancy, price: $price, roomNumbers: $roomNumbers){
      id
      name
      description
      images{
        url
        uuid
      }
      price
      others
      occupancy
    }
  }
`,O=g.a`
mutation($id: ID!, $images: [image]!, $name: String!, $description: String!, $others: [String]!, $occupancy: Int!, $price: Int!, $roomNumbers: [Int]!){
    updateRoom(id: $id, images: $images, name: $name, description: $description, others: $others, occupancy: $occupancy, price: $price, roomNumbers: $roomNumbers){
      id
      name
      description
      images{
        url
        uuid
      }
      price
      others
      occupancy
    }
  }
`,f=g.a`
mutation($id: ID!){
    deleteRoom(id: $id){
      id
      name
      description
      images{
        url
        uuid
      }
      price
      others
      occupancy
    }
  }
`;var y=a(98),v=a(44),k=a(569),w=a.n(k);var $=e=>{const[t]=Object(h.a)(f);let a=e.items;console.log(a,e.data);const o=Object(u.q)(),s=()=>{e.setLoading(!0),t({variables:{id:e.data.id},refetchQueries:[y.a,{variables:{id:e.data.hotel.id}}]}).then((t=>{e.setLoading(!1),v.b.success("Room deleted successfully",{autoClose:5500,pauseOnHover:!0})})).catch((t=>{e.setLoading(!1),v.b.error(t.message,{autoClose:5500,pauseOnHover:!0})}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(b.c,{style:{gridTemplateColumns:`repeat(${a.length}, 1fr)`},className:"normal-col",children:[Object(l.jsx)(b.d,{children:e.data.name}),Object(l.jsx)(p.a,{interactive:!0,content:e.data.price,placement:"bottom",children:Object(l.jsx)(b.d,{children:e.data.price})}),Object(l.jsx)(p.a,{interactive:!0,content:e.data.occupancy,placement:"bottom",children:Object(l.jsx)(b.d,{children:e.data.occupancy})}),Object(l.jsx)(p.a,{interactive:!0,content:Object(j.e)(e.data.addedOn),placement:"bottom",children:Object(l.jsx)(b.d,{children:Object(j.d)(e.data.addedOn)})}),Object(l.jsxs)(b.a,{children:[Object(l.jsx)(b.b,{onClick:()=>e.setRoomModal({state:!0,title:"Update Room Details",param:e.data,action:"update"}),children:Object(l.jsx)("img",{alt:"",width:"20px",src:"https://img.icons8.com/plumpy/24/000000/edit--v1.png"})}),Object(l.jsx)(b.b,{onClick:()=>o(`/hotel/${e.data.hotel.id}`,{state:{view:"manager"}}),children:Object(l.jsx)("img",{alt:"",width:"20px",src:"https://img.icons8.com/color/48/000000/connection-status-off--v1.png"})}),Object(l.jsx)(b.b,{onClick:s,children:Object(l.jsx)(w.a,{style:{color:"#ff6464"}})})]})]}),Object(l.jsxs)(b.c,{className:"responsive-col",children:[Object(l.jsx)(b.d,{children:e.data.name}),Object(l.jsxs)(b.a,{style:{justifyContent:"flex-end"},children:[Object(l.jsx)(b.b,{onClick:()=>e.setRoomModal({state:!0,title:"Update Room Details",param:e.data,action:"update"}),children:Object(l.jsx)("img",{alt:"",width:"20px",src:"https://img.icons8.com/plumpy/24/000000/edit--v1.png"})}),Object(l.jsx)(b.b,{onClick:()=>o(`/hotel/${e.data.hotel.id}`,{state:{view:"manager"}}),children:Object(l.jsx)("img",{alt:"",width:"20px",src:"https://img.icons8.com/color/48/000000/connection-status-off--v1.png"})}),Object(l.jsx)(b.b,{onClick:s,children:Object(l.jsx)(w.a,{style:{color:"#ff6464"}})})]})]})]})},N=a(20);const C=s.a.div`
    @media(max-width: 1000px){
        margin-top: 20px;
    }
`,R=s.a.div`
    display: flex;
    gap: 10px;
    margin: 10px 0;
`;var S=e=>{const[t,a]=Object(o.useState)(""),[s,i]=Object(o.useState)(!1),[d,p]=Object(o.useState)([]),j=["select","name","price","occupancy","addedOn","status","actions"],[b]=Object(h.a)(f);let u=e.rooms.filter((e=>e.name.toLowerCase().includes(t.toString().toLowerCase())));return Object(l.jsxs)(C,{children:[Object(l.jsx)(c.a,{query:t,setQuery:a,placeholder:"\u641c\u7d22\u623f\u95f4..."}),Object(l.jsx)(R,{children:Object(l.jsxs)(N.a,{onClick:async()=>{if(d.length){if(window.confirm(`\u786e\u5b9a\u8981\u5220\u9664\u9009\u4e2d\u7684 ${d.length} \u4e2a\u623f\u95f4\u5417\uff1f`)){i(!0);try{for(const e of d)await b({variables:{id:e}});v.b.success("\u6279\u91cf\u5220\u9664\u6210\u529f"),p([])}catch(e){v.b.error("\u6279\u91cf\u5220\u9664\u5931\u8d25: "+e.message)}finally{i(!1)}}}else v.b.warning("\u8bf7\u5148\u9009\u62e9\u8981\u5220\u9664\u7684\u623f\u95f4")},disabled:!d.length||s,children:["\u6279\u91cf\u5220\u9664 (",d.length,")"]})}),Object(l.jsx)(m,{list:["\u9009\u62e9","\u623f\u95f4\u540d\u79f0","\u4ef7\u683c","\u5bb9\u7eb3\u4eba\u6570","\u6dfb\u52a0\u65f6\u95f4","\u72b6\u6001","\u64cd\u4f5c"]}),s?Object(l.jsx)(r.a,{}):u.map((t=>Object(l.jsx)($,{data:t,setRoomModal:e.setRoomModal,setLoading:i,selected:d.includes(t.id),onSelect:e=>{p(e?[...d,t.id]:d.filter((e=>e!==t.id)))},items:j},t.id))),0===u.length&&Object(l.jsx)(n.g,{className:"small",style:{textAlign:"center",marginTop:"20px"},children:"\u6682\u65e0\u623f\u95f4"})]})},D=a(64),B=a(801),I=a.n(B),M=a(800),H=a.n(M),L=(a(570),a(314)),P=a(327),U=(a(144),a(342)),Y=a.n(U),T=(a(339),a(374)),q=a(129),A=a.n(q);var z=e=>{const t=e.room,[a]=Object(h.a)(x,{refetchQueries:[y.a,{variables:{id:e.hotel.id}}]}),[s]=Object(h.a)(O,{refetchQueries:[y.a,{variables:{id:e.hotel.id}}]}),[i,n]=Object(o.useState)(!1),[c,d]=Object(o.useState)(!1),[m,p]=Object(o.useState)({name:t?t.name:"",description:t?t.description:"",hotel:e.hotel.id,images:t?t.images:[],others:t?t.others:[],occupancy:t?t.occupancy:null,price:t?t.price:null,roomNumbers:t?t.roomNumbers:[]}),[b,u]=Object(o.useState)([]),[g,f]=Object(o.useState)([]),k=Array.from({length:e.hotel.totalRooms},((t,a)=>({number:a+1,assigned:e.hotel.roomsMap[`${a+1}`]&&!m.roomNumbers.includes(a+1)}))),w=(e,t)=>{let a=b;a[t]=e,u(a)};return Object(l.jsx)(P.e,{children:Object(l.jsx)(P.d,{className:"modal-box",children:c?Object(l.jsx)(r.a,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y.a,{className:"close-icon",onClick:()=>e.setRoomModal(!1)}),Object(l.jsx)(P.f,{children:e.title}),Object(l.jsxs)(P.c,{children:[m.images.map(((e,t)=>Object(l.jsx)(T.a,{imageUrl:e.url,data:e,styles:{height:"160px"},setImageURL:e=>w(e,t),setSelected:f,selected:g},e.uuid))),b.map(((e,t)=>Object(l.jsx)(T.a,{imageUrl:e.url,data:e,styles:{height:"160px"},setImageURL:e=>w(e,t),setSelected:f,selected:g},e.uuid))),Object(l.jsx)(P.a,{onClick:()=>{u([...b,{url:null,uuid:null}])},children:Object(l.jsx)(A.a,{className:"plus-icon"})})]}),Object(l.jsxs)("form",{onSubmit:"update"===e.action?async a=>{a.preventDefault(),d(!0);let o=[];if(g.length>0){m.images.forEach((e=>{g.includes(e.uuid)||o.push({url:e.url,uuid:e.uuid})}));let e=[];m.images.forEach((t=>{g.includes(t.uuid)&&e.push({url:t.url,uuid:t.uuid})})),await Object(j.b)(e,t.id)}if(b.length>0){m.images.forEach((e=>{o.push({url:e.url,uuid:e.uuid})}));let e=await Object(j.a)(b,t);o=o.concat(e)}s({variables:{id:t.id,name:m.name,description:m.description,images:o,others:m.others,occupancy:m.occupancy,price:m.price,roomNumbers:m.roomNumbers}}).then((t=>{v.b.success("Room updated",{autoClose:5500,pauseOnHover:!0,onClose:e.setRoomModal(!1)}),n(!0),d(!1)})).catch((e=>{v.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),d(!1)}))}:t=>{t.preventDefault(),d(!0),a({variables:{name:m.name,description:m.description,hotel:m.hotel,images:""===b[0]?m.images:b,others:m.others,occupancy:m.occupancy,price:m.price,roomNumbers:m.roomNumbers}}).then((t=>{v.b.success("New room added",{autoClose:5500,pauseOnHover:!0,onClose:e.setRoomModal(!1)}),n(!0),d(!1)})).catch((e=>{v.b.error(e.message,{autoClose:5500,pauseOnHover:!0}),d(!0)}))},children:[Object(l.jsx)(N.c,{required:"true",style:{marginBottom:"16px"},value:m.name,onChange:e=>p({...m,name:e.target.value}),placeholder:"Room name"}),Object(l.jsx)(N.e,{required:"true",style:{marginBottom:"16px"},value:m.description,onChange:e=>p({...m,description:e.target.value}),placeholder:"Room description"}),Object(l.jsx)(N.c,{required:"true",style:{marginBottom:"16px"},type:"number",value:m.occupancy,onChange:e=>p({...m,occupancy:Number(e.target.value)}),placeholder:"Occupancy"}),Object(l.jsx)(N.e,{required:"true",style:{marginBottom:"16px"},value:m.others,onChange:e=>p({...m,others:e.target.value.split(",")}),placeholder:"Room specifications (Add using ',')"}),Object(l.jsx)(N.c,{required:"true",style:{marginBottom:"16px"},type:"number",value:m.price,onChange:e=>p({...m,price:Number(e.target.value)}),placeholder:"Price"}),Object(l.jsx)(P.g,{children:k.map((e=>Object(l.jsx)("div",{className:""+(e.assigned?"assigned":m.roomNumbers.includes(e.number)?"selected":""),onClick:()=>((e,t)=>{if(m.roomNumbers.includes(e)&&!t){let t=m.roomNumbers.filter((t=>t!==e));p({...m,roomNumbers:t})}else{if(t)return;{let t=m.roomNumbers;t.push(e),p({...m,roomNumbers:t})}}})(e.number,e.assigned),children:e.number})))}),!i&&Object(l.jsx)(N.a,{type:"submit",style:{marginLeft:"auto",marginTop:"40px"},children:e.title})]})]})})})},E=a(441),F=a(59),Q=a(120),J=a(564);var K=e=>Object(l.jsx)(P.e,{children:Object(l.jsxs)(P.d,{className:"modal-box",style:{width:"1200px"},children:[Object(l.jsx)(Y.a,{className:"close-icon",onClick:()=>e.setBookingsModal({state:!1,title:""})}),Object(l.jsx)(P.f,{children:e.title}),Object(l.jsx)(J.default,{style:{marginTop:"0px",padding:"0px"},filter:"hotel",hotel:e.hotel,bookingsData:e.bookings})]})}),W=a(104),V=a(349),G=a(805),_=a(808),X=a(806),Z=a(798),ee=a(799),te=a(803),ae=a(566),oe=a(797);const se=s.a.div`
    background: white;
    box-shadow: 2px 3px 7px 0px #66666682;
    border-radius: 6px;
    max-width: 100%;
`,ie=s.a.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    height: 100%
`,ne=s.a.div`
    height: 100%;
    width: 100%;
    padding: 26px;
    border: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 3px 7px 0px #66666682;
    }
    h2{
        margin-bottom: 10px;
    }

    p {
        color: grey;
        font-size: 14px;
        text-align: center
    }
`,re=s.a.div`
    height: 300px;
    margin: 20px;
`;var ce=e=>{const{hotel:t}=e,{data:a,loading:s,error:i}=Object(L.a)(V.a,{variables:{id:t.id},pollInterval:3e4}),n=Object(o.useMemo)((()=>{if(!a)return[];const e={};return a.getHotelBookings.forEach((t=>{const a=new Date(t.from).getMonth();e[a]||(e[a]={month:a+1,earnings:0,bookings:0,occupancyRate:0}),t.paid&&(e[a].earnings+=t.amount),e[a].bookings+=1})),Object.keys(e).forEach((o=>{const s=30*t.totalRooms,i=e[o].bookings*a.getHotelBookings.reduce(((e,t)=>e+(new Date(t.to)-new Date(t.from))/864e5),0);e[o].occupancyRate=i/s*100})),Object.values(e)}),[a,t.totalRooms]);if(s)return Object(l.jsx)(r.a,{});if(i)return Object(l.jsx)(W.a,{error:i});const c=a.getHotelBookings;return Object(l.jsxs)(se,{children:[Object(l.jsxs)(ie,{children:[Object(l.jsxs)(ne,{children:[Object(l.jsxs)("h2",{children:[Object(l.jsx)("span",{style:{fontSize:"10px"},children:"\xa5"})," ",(()=>{let e=0;return c.forEach((t=>{t.paid&&(e+=t.amount)})),e})()]}),Object(l.jsx)(b.d,{children:"\u603b\u6536\u5165"})]}),Object(l.jsxs)(ne,{onClick:()=>e.setBookingsModal({state:!0,title:"\u6240\u6709\u9884\u8ba2",param:c}),children:[Object(l.jsx)("h2",{children:c.length}),Object(l.jsx)(b.d,{children:"\u603b\u9884\u8ba2\u6570 (\u70b9\u51fb\u67e5\u770b)"})]}),Object(l.jsxs)(ne,{children:[Object(l.jsxs)("h2",{children:[t.rooms.length," / ",t.totalRooms]}),Object(l.jsx)(b.d,{children:"\u53ef\u7528\u623f\u95f4"})]}),Object(l.jsxs)(ne,{children:[Object(l.jsx)("h2",{children:(()=>{let e=0;const t=(new Date).getDate();return c.forEach((a=>{new Date(a.from).getDate()===t&&e++})),e})()}),Object(l.jsx)(b.d,{children:"\u4eca\u65e5\u9884\u8ba2"})]}),Object(l.jsxs)(ne,{children:[Object(l.jsxs)("h2",{children:[(()=>{const e=t.totalRooms,a=c.filter((e=>{const t=new Date,a=new Date(e.from),o=new Date(e.to);return t>=a&&t<=o})).length;return Math.round(a/e*100)})(),"%"]}),Object(l.jsx)(b.d,{children:"\u5f53\u524d\u5165\u4f4f\u7387"})]})]}),Object(l.jsx)(re,{children:Object(l.jsx)(G.a,{width:"100%",height:"100%",children:Object(l.jsxs)(_.a,{data:n,children:[Object(l.jsx)(X.a,{strokeDasharray:"3 3"}),Object(l.jsx)(Z.a,{dataKey:"month"}),Object(l.jsx)(ee.a,{}),Object(l.jsx)(te.a,{}),Object(l.jsx)(ae.a,{}),Object(l.jsx)(oe.a,{type:"monotone",dataKey:"earnings",stroke:"#8884d8"}),Object(l.jsx)(oe.a,{type:"monotone",dataKey:"bookings",stroke:"#82ca9d"}),Object(l.jsx)(oe.a,{type:"monotone",dataKey:"occupancyRate",stroke:"#ffc658"})]})})})]})};const le=s.a.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 360px;
    gap: 16px;

    @media(max-width: 1000px){
        display: block;
        height: fit-content
    }
`,de=s.a.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: grey;
    max-width: -webkit-fill-available;
    position: relative;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    margin-bottom: 16px;
    .card-details{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: #00000066;
        padding: 16px;
    }

    @media(max-width: 1000px){
        height: 360px;
        margin: 0
    }
`,me=s.a.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    text-align: center;
    .card-option{
        background: #0000009c;
        width: 100%;
        padding: 10px;
        cursor: pointer;
        :hover{
            background: #383838
        }
    }
`,pe=s.a.div`
    width: 100%;
    border-radius: 20px;
    max-width: -webkit-fill-available;
    margin-bottom: 20px;
`,je=s.a.div`
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
    white-space: nowrap;
    span{
        font-weight: bold
    }
`;t.default=()=>{const{setPage:e}=Object(o.useContext)(i.a),t=JSON.parse(localStorage.getItem("user")),{loading:a,data:s,error:r}=Object(L.a)(y.a,{variables:{id:null===t||void 0===t?void 0:t.id}}),[c,d]=Object(o.useState)({state:!1,title:"",param:null,action:""}),[m,p]=Object(o.useState)({state:!1,title:"",param:null,action:""}),[b,u]=Object(o.useState)({state:!1,title:"",param:null,action:""});Object(o.useEffect)((()=>{e("Dashboard")}),[e]),Object(o.useEffect)((()=>{a||r||!s||s.getHotel||p({state:!0,title:"Create Your Hotel",action:"add",param:null})}),[a,r,s,p]);const h=[{label:"Create Room",icon:Object(l.jsx)(H.a,{}),action:()=>d({state:!0,title:"Add New Room",params:null,action:"add"})},{label:"Edit Hotel",icon:Object(l.jsx)(I.a,{}),action:()=>p({state:!0,title:"Update Hotel Details",params:null,action:"update"})}];if(a)return Object(l.jsx)(F.a,{});if(r)return Object(l.jsx)(Q.a,{error:r});const g=s.getHotel;return Object(l.jsxs)(n.c,{children:[c.state&&Object(l.jsx)(z,{action:c.action,title:c.title,hotel:g,room:c.param,setRoomModal:d}),m.state&&Object(l.jsx)(E.a,{action:m.action,title:m.title,hotel:g,setHotelModal:p}),b.state&&Object(l.jsx)(K,{title:b.title,setBookingsModal:u,hotel:g,bookings:b.param}),g&&Object(l.jsx)(pe,{children:Object(l.jsx)(ce,{hotel:g,setBookingsModal:u})}),Object(l.jsxs)(le,{children:[Object(l.jsx)(de,{style:{backgroundImage:`url(${g&&g.image?g.image:D.a})`},children:g?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"card-details",children:[Object(l.jsx)("h1",{children:g.name}),Object(l.jsx)("p",{children:g.location}),Object(l.jsx)("p",{className:"description",children:g.description}),Object(l.jsxs)(je,{children:["Total Rooms : ",Object(l.jsx)("span",{children:g.totalRooms})]}),Object(l.jsxs)(je,{children:["Added on : ",Object(l.jsx)("span",{children:Object(j.d)(g.addedOn,"Do MMMM, YYYY")})]}),g.manager&&Object(l.jsxs)(je,{children:["Manager: ",Object(l.jsx)("span",{children:g.manager.name})]})]}),Object(l.jsx)(me,{children:h.map((e=>Object(l.jsxs)("div",{className:"card-option",onClick:e.action,children:[e.icon,Object(l.jsx)("p",{children:e.label})]},e.label)))})]}):Object(l.jsxs)("div",{className:"card-details",children:[Object(l.jsx)("h1",{children:"No Hotel Information"}),Object(l.jsx)("p",{children:"Please create or assign a hotel."})]})}),Object(l.jsx)(S,{rooms:g?g.rooms:[],setRoomModal:d})]})]})}}}]);