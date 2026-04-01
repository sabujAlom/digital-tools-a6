import React, { use } from "react";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);
  return (
    <div className="py-10 max-w-6xl mx-auto">

      <div className="text-center space-y-3 mt-10 mb-10">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-xl">
          Choose from our curated collection of premium digital products
          designedto <br /> boost your productivity and creativity.
        </p>
      </div>
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            models.map(model =>)
        }

      </div>

    </div>
  );
};

export default Models;
