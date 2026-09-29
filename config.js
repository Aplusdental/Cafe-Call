// إعدادات Firebase (مش سر، الحماية في database.rules.json)
const FB = {
  apiKey: "AIzaSyDf5NFildk6lGRnCE8CrlH2Uwb4atgiMCA",
  authDomain: "cafe-and-restaurant-afc66.firebaseapp.com",
  databaseURL: "https://cafe-and-restaurant-afc66-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cafe-and-restaurant-afc66",
  appId: "1:811104196654:web:2e306b9945b2d10f4927bf"
};

// كل محل له مدخل هنا. المفتاح (arkan) هو اللي بيظهر في اللينك: ?r=arkan
const RESTAURANTS = {
  arkan: {
    name: "كافيه أركان",
    accent: "#0F8B8D",
    tables: 20,
    buttons: [
      { id: "waiter", label: "نداء الويتر", sub: "هييجي لحضرتك", reply: "الويتر في الطريق ليك",
        icon: "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0" },
      { id: "bill", label: "طلب الحساب", sub: "الفاتورة", reply: "الحساب جاي حالاً",
        icon: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6" },
      { id: "order", label: "عايز أطلب", sub: "أوردر جديد", reply: "الويتر جاي ياخد الأوردر",
        icon: "M5 4h14v16H5zM9 9h6M9 13h6" },
      { id: "water", label: "مياه", sub: "مياه أو تلج", reply: "المياه جاية",
        icon: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" }
    ]
  }
};
