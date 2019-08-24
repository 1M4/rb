import { Observable, of, throwError } from 'rxjs';
import { retryWhen, mergeMap, delay } from 'rxjs/operators';

const DEFAULT_RETRIES = 4;
const ERROR_MESSAGE = 'Maximun retries number exceeded';

export function retryOperator(delayMs: number, maxRetries = DEFAULT_RETRIES) {
  let retries = maxRetries;

  return (src: Observable<any>) =>
    src.pipe(
      retryWhen((errors: Observable<any>) => errors.pipe(
        delay(delayMs),
        mergeMap(error => retries-- > 0 ? of(error) : throwError(ERROR_MESSAGE)
        ))
      )
    );
}
