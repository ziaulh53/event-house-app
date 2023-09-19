import { Cards, Layout, Slider, SliderClient } from "../components";

const Home = () => {
  return (
    <Layout className="">
      <Slider />

      <center className="text-gray-700 text-2xl md:text-4xl font-semibold mt-8 mb-5">
        Categories
      </center>
      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-6 md:col-span-4">
          <Cards />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Cards />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Cards />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Cards />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Cards />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Cards />
        </div>
      </div>

      <center className="text-gray-700 text-2xl md:text-4xl font-semibold mt-8 mb-5">
        Why Choose Us
      </center>
      <div className="grid grid-cols-12 gap-3 md:gap-5">
        <div className="col-span-12 md:col-span-6 p-2">
          <h2 className="flex justify-center text-lg md:text-xl lg:text-2xl font-semibold">
            We give best service
          </h2>
          <p className="text-left text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repellendus, accusantium fugiat fuga nesciunt recusandae dignissimos
            error, exercitationem aliquam incidunt numquam quo magnam libero
            omnis aspernatur in doloremque voluptas, ex officiis sed dolor?
            Omnis quia inventore illum dolorem, ea nesciunt sapiente repellendus
            ex distinctio quam beatae veritatis deserunt pariatur mollitia.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 p-2">
          <h2 className="flex justify-center text-lg md:text-xl lg:text-2xl font-semibold">
            We give best service
          </h2>
          <p className="text-left text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repellendus, accusantium fugiat fuga nesciunt recusandae dignissimos
            error, exercitationem aliquam incidunt numquam quo magnam libero
            omnis aspernatur in doloremque voluptas, ex officiis sed dolor?
            Omnis quia inventore illum dolorem, ea nesciunt sapiente repellendus
            ex distinctio quam beatae veritatis deserunt pariatur mollitia.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 p-2">
          <h2 className="flex justify-center text-lg md:text-xl lg:text-2xl font-semibold">
            We give best service
          </h2>
          <p className="text-left text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repellendus, accusantium fugiat fuga nesciunt recusandae dignissimos
            error, exercitationem aliquam incidunt numquam quo magnam libero
            omnis aspernatur in doloremque voluptas, ex officiis sed dolor?
            Omnis quia inventore illum dolorem, ea nesciunt sapiente repellendus
            ex distinctio quam beatae veritatis deserunt pariatur mollitia.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 p-2">
          <h2 className="flex justify-center text-lg md:text-xl lg:text-2xl font-semibold">
            We give best service
          </h2>
          <p className="text-left text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repellendus, accusantium fugiat fuga nesciunt recusandae dignissimos
            error, exercitationem aliquam incidunt numquam quo magnam libero
            omnis aspernatur in doloremque voluptas, ex officiis sed dolor?
            Omnis quia inventore illum dolorem, ea nesciunt sapiente repellendus
            ex distinctio quam beatae veritatis deserunt pariatur mollitia.
          </p>
        </div>
      </div>

      <center className="text-gray-700 text-2xl md:text-4xl font-semibold mt-8 mb-4">
        Client Feedback
      </center>
      <SliderClient />
    </Layout>
  );
};

export default Home;
