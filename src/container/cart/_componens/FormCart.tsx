const FormCart = () => {
  return (
    <div className="w-full lg:w-[70%]">
      <h2 className="mb-2 text-base font-semibold md:text-lg lg:mb-4">Thông Tin Khách Hàng</h2>
      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium placeholder:text-sm md:text-base placeholder:md:text-base">
            Họ và tên
          </label>
          <input
            type="text"
            className="w-full rounded-xl border px-4 py-2 placeholder:text-sm placeholder:md:text-base"
            placeholder="Trần Văn Mạnh"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium placeholder:text-sm md:text-base placeholder:md:text-base">
              Số điện thoại
            </label>
            <input
              type="text"
              className="w-full rounded-xl border px-4 py-2 placeholder:text-sm placeholder:md:text-base"
              placeholder="0123 456 789"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium md:text-base">Giới tính</label>
            <div className="flex items-center space-x-4">
              <label className="text-sm md:text-base">
                <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Nam
              </label>
              <label className="text-sm md:text-base">
                <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Nữ
              </label>
              <label className="text-sm md:text-base">
                <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Khác
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium md:text-base">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border px-4 py-2"
            placeholder="abc@gmail.com"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium md:text-base">Địa chỉ</label>
          <input
            type="text"
            placeholder="Địa chỉ "
            className="w-full rounded-xl border px-4 py-2 placeholder:text-sm placeholder:md:text-base"
          ></input>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium md:text-base">Ghi chú</label>
          <textarea
            className="w-full rounded-xl border px-4 py-2"
            placeholder="VD: giao hàng giờ hành chính"
            rows={3}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default FormCart;
