import { of, throwError } from 'rxjs';
import { retryWhen, mergeMap, delay } from 'rxjs/operators';
const DEFAULT_RETRIES = 4;
const ERROR_MESSAGE = 'Maximun retries number exceeded';
export function retryOperator(delayMs, maxRetries = DEFAULT_RETRIES) {
    let retries = maxRetries;
    return (src) => src.pipe(retryWhen((errors) => errors.pipe(delay(delayMs), mergeMap(error => retries-- > 0 ? of(error) : throwError(ERROR_MESSAGE)))));
}
//# sourceMappingURL=retryOperator.js.map