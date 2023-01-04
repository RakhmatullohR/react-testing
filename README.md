# React-Testing

Tutorial link in Codevolution: https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd

#### Types of Tests
- Unit tests
- Integration tests
- E2E tests (end-to-end tests)

#### Unit tests

- Focus is on testing the individual building blocks of an application such as a class or a function or a component
- Each unit or building block is tested in isolation, independent of other units
- Run in a short amount of time and make it very easy to pinpoint failures
- Relatively easier to write and maintain

#### Integration tests

- Focus is on testing a combination of units and ensuring they work together
- Take longer than unit tests

#### E2E tests

- Focus is on testing the entire application flow and ensuring it works as designed from start to finish
- Involves in a real UI, a real backend database, real services etc
- Take the longest as they cover the most amount of code
- Have a cost implication as you interact with real APIs that may charge based on the number of requests

#### Testing pyramid

![alt text](https://raw.githubusercontent.com/RakhmatullohR/React-Testing/RTT/03-Types_of_Tests/assets/imgs/Testing%20pyramid.png)
#### RTL Philosophy
- "The more your tests resemble the way your software is used, the more confidence they can give you."
- Tests  we are going to learn to write in this series strike a balance between unit tests in the sense they are at a component level and easy to write and maintain and E2E tests in the sense they resemble the way a user would interact with the component
- With React Testing Library, we are not concerned about the implementation details of a component
- Instead, we are testing how the components behave when a user interacts with them RTL will not care if you add 4+% or 5+5 to display the number 8
- Refactoring will not affect your test as long as the end result is the same

#### Types of tests and RTL
- Unit tests
- Integration tests
- E2E tests
- RTL strikes a balance between the Unit and E2E tests which is what we will be learning in the rest of the series

## ==== UZBET TILIDA ==== 

#### Sinovlar turi
- Birlik sinovlari
- Integratsiya testlari
- E2E testlari (oxirigacha testlar)

#### Birlik sinovlari

- Sinf yoki funksiya yoki komponent kabi ilovaning alohida qurilish bloklarini sinab ko'rishga e'tibor qaratiladi
- Har bir birlik yoki qurilish bloki boshqa birliklardan mustaqil ravishda izolyatsiya qilingan holda sinovdan o'tkaziladi
- Qisqa vaqt ichida ishlang va nosozliklarni aniqlashni juda oson qiling
- Yozish va saqlash nisbatan osonroq

#### Integratsiya testlari

- Asosiy e'tibor birliklarning kombinatsiyasini sinab ko'rish va ularning birgalikda ishlashini ta'minlashga qaratilgan
- Birlik testlariga qaraganda ko'proq vaqt talab qiling

#### E2E testlari

- Asosiy e'tibor butun dastur oqimini sinab ko'rish va boshidan oxirigacha ishlab chiqilgan tarzda ishlashini ta'minlashga qaratilgan
- Haqiqiy UI, haqiqiy ma'lumotlar bazasi, real xizmatlar va boshqalarni o'z ichiga oladi
- Eng ko'p vaqtni oling, chunki ular eng ko'p kod miqdorini qamrab oladi
- Haqiqiy API-lar bilan o'zaro aloqada bo'lganingizda, so'rovlar soniga qarab to'lov olinishi mumkin bo'lgan xarajatlarni hisobga oling

#### Sinov piramidasi

![alt text](https://raw.githubusercontent.com/RakhmatullohR/React-Testing/RTT/03-Types_of_Tests/assets/imgs/Testing%20pyramid.png)
#### RTL falsafasi
- "Testlaringiz dasturiy ta'minotingizdan qanchalik ko'p foydalanishga o'xshasa, ular sizga shunchalik ko'p ishonch beradi."
- Biz ushbu seriyada yozishni o'rganmoqchi bo'lgan testlar birlik testlari o'rtasida muvozanat hosil qiladi, chunki ular komponent darajasida va yozish va saqlash oson va E2E testlari foydalanuvchining komponent bilan o'zaro ta'siriga o'xshaydi.
- React Testing Library bilan biz komponentni amalga oshirish tafsilotlari haqida tashvishlanmaymiz
- Buning o'rniga, foydalanuvchi ular bilan o'zaro aloqada bo'lganda komponentlar qanday harakat qilishini sinab ko'rmoqdamiz RTL 8 raqamini ko'rsatish uchun 4+% yoki 5+5 qo'shishingizga ahamiyat bermaydi.
- Yakuniy natija bir xil bo'lsa, refaktoring sizning testingizga ta'sir qilmaydi

#### Sinov turlari va RTL
- Birlik sinovlari
- Integratsiya testlari
- E2E testlari
- RTL Unit va E2E testlari o'rtasidagi muvozanatni saqlaydi, bu biz seriyaning qolgan qismida o'rganamiz.