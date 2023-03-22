import React from "react";
import { ArrivalFormatter } from "./ArrivalFormatter";
import { DepartureFormatter } from "./DepartureFormatter";
import { ItemFormatter } from "./ItemFormatter";
import { ProductFormatter } from "./ProductFormatter";
import { SupplierFormatter } from "./SupplierFormatter";

interface InstructionSubjectFormatterProps {
  /** The type of subject. For example, a supplier */
  subjectType: string;
  /** The id of the instruction subject record. For example, a supplierId */
  subjectId: string;
}

/** Returns the instruction subject name inside of an unstyled span tag */
export const InstructionSubjectFormatter: React.FC<InstructionSubjectFormatterProps> =
  ({ subjectId, subjectType }) => {
    switch (subjectType) {
      case "item":
        return <ItemFormatter id={subjectId} />;

      case "arrival":
        return <ArrivalFormatter id={subjectId} />;

      case "product":
        return <ProductFormatter id={subjectId} />;

      case "supplier":
        return <SupplierFormatter id={subjectId} />;

      case "departure":
        return <DepartureFormatter id={subjectId} />;

      case "arrivalRelease":
        return (
          <span>
            Release for arrival <ArrivalFormatter id={subjectId} />
          </span>
        );

      case "arrivalDelivery":
        return (
          <span>
            Delivery for arrival <ArrivalFormatter id={subjectId} />
          </span>
        );

      case "departurePickList":
        return (
          <span>
            Pick list for departure <DepartureFormatter id={subjectId} />
          </span>
        );

      case "departurePick":
        return (
          <span>
            Pick for departure <DepartureFormatter id={subjectId} />
          </span>
        );

      default:
        return null;
    }
  };
