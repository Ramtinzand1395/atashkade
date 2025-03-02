import React from "react";
import img from "../assets/asha2.jpg";
import img1 from "../assets/asha1.jpg";

const Asha = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="font-bold text-4xl">ماهنامه اشا</h2>
      <div className="grid grid-cols-3 gap-5 my-10">
        <div className="shadow-lg rounded-t-2xl">
          <img src={img} className="w-full h-[200px] object-cover rounded-t-2xl" alt="" />
         <h4 className="my-3 font-bold text-2xl mx-5">
            ماهنامه اشا اسفند
         </h4>
          <p className="text-sm p-4">
            در روز یکشنبه 5 اسفندماه 1403 برابر با خیرایزد و اسفند ماه 3762
            زرتشتی، ارزیابان شورای جهانی صنایع دستی که تحت نظر سازمان یونسکو
            فعالیت می کندد، از آتشکده زرتشتیان یزد بازدید کردند. گروه ارزیابان
            شورای جهانی صنایع دستی از 4 کشور مختلف با همراهی مسئولین اداره کل
            میراث فرهنگی، گردشگری و صنایع دستی استان با حضور در آتشکده زرتشتیان
            یزد، به بازدید پرداختند و در پایان از باشندگان پذیرایی به عمل آمد.
          </p>
        </div>
        <div className="shadow-lg rounded-t-2xl">
          <img src={img1} className="w-full h-[200px] object-cover rounded-t-2xl" alt="" />
         <h4 className="my-3 font-bold text-2xl mx-5">
            ماهنامه اشا اسفند
         </h4>
          <p className="text-sm p-4">
            در روز یکشنبه 5 اسفندماه 1403 برابر با خیرایزد و اسفند ماه 3762
            زرتشتی، ارزیابان شورای جهانی صنایع دستی که تحت نظر سازمان یونسکو
            فعالیت می کندد، از آتشکده زرتشتیان یزد بازدید کردند. گروه ارزیابان
            شورای جهانی صنایع دستی از 4 کشور مختلف با همراهی مسئولین اداره کل
            میراث فرهنگی، گردشگری و صنایع دستی استان با حضور در آتشکده زرتشتیان
            یزد، به بازدید پرداختند و در پایان از باشندگان پذیرایی به عمل آمد.
          </p>
        </div> <div className="shadow-lg rounded-t-2xl">
          <img src={img} className="w-full h-[200px] object-cover rounded-t-2xl" alt="" />
         <h4 className="my-3 font-bold text-2xl mx-5">
            ماهنامه اشا اسفند
         </h4>
          <p className="text-sm p-4">
            در روز یکشنبه 5 اسفندماه 1403 برابر با خیرایزد و اسفند ماه 3762
            زرتشتی، ارزیابان شورای جهانی صنایع دستی که تحت نظر سازمان یونسکو
            فعالیت می کندد، از آتشکده زرتشتیان یزد بازدید کردند. گروه ارزیابان
            شورای جهانی صنایع دستی از 4 کشور مختلف با همراهی مسئولین اداره کل
            میراث فرهنگی، گردشگری و صنایع دستی استان با حضور در آتشکده زرتشتیان
            یزد، به بازدید پرداختند و در پایان از باشندگان پذیرایی به عمل آمد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asha;
