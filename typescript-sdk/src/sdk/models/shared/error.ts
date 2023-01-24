import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doc" })
  doc?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
