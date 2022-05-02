export default function NonPost() {
  return (
    <section className="">
      <div className="card">
        <div className="flex gap-[6px] p-4 border-b-2 border-black">
          <div className="circle circle__red"></div>
          <div className="circle circle__yellow"></div>
          <div className="circle circle__green"></div>
        </div>
        <div className="p-8">
          <p className="text-center text-gray-base">目前尚無動態，新增一則貼文吧！</p>
        </div>
      </div>
    </section>
  )
}
