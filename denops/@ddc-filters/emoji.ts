import { CompletionMetadata } from "../@ddc-sources/emoji.ts";
import { Candidate } from "https://deno.land/x/ddc_vim@v0.15.0/types.ts";
import {
  BaseFilter,
  FilterArguments,
} from "https://deno.land/x/ddc_vim@v0.15.0/base/filter.ts";

export class Filter extends BaseFilter<Record<string, never>> {
  filter(
    args: FilterArguments<Record<string, never>>,
  ): Promise<Candidate[]> {
    return Promise.resolve(args.candidates.filter(
      (candidate) => {
        const meta = candidate.user_data as unknown as CompletionMetadata;
        return meta && meta.name.startsWith(`${args.completeStr}`);
      },
    ));
  }
  params() {
    return {};
  }
}
