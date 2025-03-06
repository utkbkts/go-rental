import EditInput from "@/components/input/EditInput";
import { Form } from "@/components/ui/form";
import {
  createDetailSchema,
  detailMenuSchema,
} from "@/validation/details/detailMenuSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "@/components/picker/DateRangePicker";
import { Button } from "@/components/ui/button";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/apolloVars";
import { DateRange } from "react-day-picker";
import { differenceInDays } from "date-fns";
import { calculateRent } from "@/helpers/helpers";

type Props = {
  carId: string;
  rentPerDay?: number;
  disableDates?: [string];
};

const BookingForm = ({ carId, rentPerDay = 0, disabledDates }: Props) => {
  const user = useReactiveVar(userVar);
  const form = useForm<createDetailSchema>({
    resolver: zodResolver(detailMenuSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      additionalNotes: "",
      bookingDates: 0,
    },
    mode: "onChange",
  });

  const daysRent = form.watch("bookingDates");

  const dateChangeHandler = (date: DateRange | undefined) => {
    if (!date?.from || !date?.to) {
      return;
    }

    const formattedBookingDates =
      differenceInDays(
        date.to.setHours(0, 0, 0, 0),
        date.from.setHours(0, 0, 0, 0)
      ) + 1;

    form.setValue("bookingDates", formattedBookingDates);
  };

  const onSubmit = (data: createDetailSchema) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="mt-8 w-full">
            <CardContent className="w-full pt-4 flex flex-col gap-4">
              <EditInput
                control={form.control}
                name="name"
                placeholder="Name"
                error={form.formState.errors.name}
              />
              <EditInput
                control={form.control}
                name="email"
                placeholder="Email"
                error={form.formState.errors.email}
              />
              <EditInput
                control={form.control}
                name="phoneNo"
                placeholder="PhoneNo"
                error={form.formState.errors.phoneNo}
              />
              <DateRangePicker
                name="bookingDates"
                control={form.control}
                onDateChange={dateChangeHandler}
              />
              <EditInput
                control={form.control}
                name="additionalNotes"
                multiline
                placeholder="Type your additional notes here."
                error={form.formState.errors.additionalNotes}
              />
            </CardContent>
          </Card>
          <br />
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>
                Take a look at your booking & confirm
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1>Days of rent:</h1>
                <span>{daysRent}</span>
              </div>
              <div className="flex items-center justify-between">
                <h1>Rent Per Day:</h1>
                <span>${rentPerDay.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <h1>Total Rent:</h1>
                <span>
                  ${calculateRent(daysRent, rentPerDay).rent.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h1>Tax(15%):</h1>
                <span>
                  ${calculateRent(daysRent, rentPerDay).tax.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Est. Total:</h1>
                <span className="font-bold">
                  ${calculateRent(daysRent, rentPerDay).total.toFixed(2)}
                </span>
              </div>
              <div>
                {!user ? (
                  <Button type="submit" className="w-full">
                    Proceed
                  </Button>
                ) : (
                  <Button type="submit" disabled={true} className="w-full">
                    Please login
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default BookingForm;
