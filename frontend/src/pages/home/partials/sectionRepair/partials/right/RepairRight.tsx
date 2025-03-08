import { useState } from "react";
import SelectInput from "@/components/input/SelectInput";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  createFilteredSchema,
  filteredMenuSchema,
} from "@/validation/searchMenu/searchMenuSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useQuery } from "@apollo/client";
import { GET_ALL_QUERIES } from "@/graphql/queries/car.queries";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import PopoverInput from "@/components/input/PopoverInput";
import {
  CarBrand,
  CarCategories,
  CarModels,
  CarTransmissions,
} from "shared/src/interfaces";
export interface SelectedValues {
  brand: string[];
  model: string[];
  categories: string[];
  transmission: string[];
}
const RepairRight = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const start_year = searchParams.get("start_year")!;
  const finish_year = searchParams.get("finish_year")!;
  const brand = searchParams.get("brand")!;

  //year
  const yearOptions = Array.from({ length: 21 }, (_, i) => {
    const year = (2025 - i).toString();
    return { value: year, label: year };
  });

  const filters = {
    ...{ year: { gte: parseInt(start_year), lte: parseInt(finish_year) } },
    ...(brand && { brand }),
  };

  const variables = {
    filters,
  };

  const { data, loading } = useQuery(GET_ALL_QUERIES, { variables });
  const form = useForm<createFilteredSchema>({
    resolver: zodResolver(filteredMenuSchema),
    defaultValues: {
      start_year: start_year || "",
      finish_year: finish_year || "",
      brand: [],
      model: [],
      categories: [],
      transmission: [],
    },
    mode: "onChange",
  });

  const onSubmit = (data: createFilteredSchema) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        updatedSearchParams.set(key, value);
      } else {
        updatedSearchParams.delete(key);
      }
    });
    // const newPathname = `${
    //   window.location.pathname
    // }?${updatedSearchParams.toString()}`;
    // navigate(newPathname);
  };
  return (
    <div>
      <h1 className="text-[#C7081B] text-[24px] font-poppins">
        <strong>SEARCH</strong> OUR INVENTORY
      </h1>
      <br />
      <div className="bg-[#F0F0F0] w-full h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2"
          >
            <div className="flex flex-col p-4">
              <div className="flex items-center gap-4 ">
                <SelectInput
                  control={form.control}
                  name="start_year"
                  label="Start Year"
                  options={yearOptions}
                  error={form.formState.errors.start_year}
                />
                <span className="mt-4">to</span>
                <SelectInput
                  control={form.control}
                  name="finish_year"
                  label="Finish Year"
                  options={yearOptions}
                  error={form.formState.errors.finish_year}
                />
              </div>
              <div className="flex flex-col w-full">
                <PopoverInput
                  label="Brand"
                  products={CarBrand}
                  name="brand"
                  control={form.control}
                  error={form.formState.errors.brand}
                />
              </div>
              <div className="flex flex-col w-full">
                <PopoverInput
                  label="Model"
                  products={CarModels}
                  name="model"
                  control={form.control}
                  error={form.formState.errors.model}
                />
              </div>
              <div className="flex flex-col w-full">
                <PopoverInput
                  label="Categories"
                  products={CarCategories}
                  name="categories"
                  control={form.control}
                  error={form.formState.errors.categories}
                />
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex items-center gap-4 ">
                <SelectInput
                  control={form.control}
                  name="min_mileage"
                  label="Min Mileage"
                  options={yearOptions}
                  error={form.formState.errors.start_year}
                />
                <span className="mt-4">to</span>
                <SelectInput
                  control={form.control}
                  name="max_mileage"
                  label="Max Mileage"
                  options={yearOptions}
                  error={form.formState.errors.finish_year}
                />
              </div>
              <div className="flex flex-col w-full">
                <PopoverInput
                  label="Transmission"
                  products={CarTransmissions}
                  name="transmission"
                  control={form.control}
                  error={form.formState.errors.transmission}
                />
              </div>
            </div>
            <Button loading={loading} disabled={loading} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RepairRight;
