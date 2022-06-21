/**
 * @fileOverview
 * Provides utilities for computing hash values
 */
import * as typeChecker from '../typing/type-checker';
/**
 * Computes the hash code for a given value.
 * This method takes into account the type of the given
 * value when generating its hash code.
 */
export function hashCode(value) {
    let hash = 0;
    if (typeChecker.ok(value, typeChecker.tyBool)) {
        value = value ? 1 : 0;
    }
    else if (typeChecker.ok(value, typeChecker.tyNumber)) {
        if (value === 0) {
            return 0;
        }
    }
    if (!value) {
        return 0;
    }
    value = value.toString();
    if (value.length === 0) {
        return hash;
    }
    /*jslint plusplus: true */
    for (let i = 0, len = value.length; i < len; i++) {
        const chr = value.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/**
 * Computes the hash code for a member of an object.
 */
function hashPrimitiveMember(name, value, configuration) {
    const code = hashCode(value);
    if (configuration) {
        const bits = configuration[name];
        if (bits) {
            return code << configuration[name];
        }
    }
    return code;
}
/**
 * Computes the hash code for a member of an object, based on
 * the given member member, the value to be hashed, and the configuration
 * about how each member contributes to the enire hash code of the
 * object.
 */
export function hashMember(name, value, configuration) {
    if (typeChecker.ok(value, typeChecker.tyArray)) {
        let code = 0;
        /*jslint plusplus: true */
        for (let i = 0; i < value.length; i++) {
            code = code + hashPrimitiveMember(name, value[i], configuration);
        }
        return code;
    }
    return hashPrimitiveMember(name, value, configuration);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc3JjL3Rvb2xzL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxLQUFLLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFVO0lBQy9CLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFFRCxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELDBCQUEwQjtJQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7S0FDekM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQixDQUFDLElBQVksRUFBRSxLQUFVLEVBQUUsYUFBd0M7SUFDM0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLElBQUksYUFBYSxFQUFFO1FBQ2YsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVksRUFBRSxLQUFVLEVBQUUsYUFBd0M7SUFDekYsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsMEJBQTBCO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksR0FBRyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNwRTtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUHJvdmlkZXMgdXRpbGl0aWVzIGZvciBjb21wdXRpbmcgaGFzaCB2YWx1ZXNcbiAqL1xuXG5pbXBvcnQgKiBhcyB0eXBlQ2hlY2tlciBmcm9tICcuLi90eXBpbmcvdHlwZS1jaGVja2VyJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGFzaCBjb2RlIGZvciBhIGdpdmVuIHZhbHVlLlxuICogVGhpcyBtZXRob2QgdGFrZXMgaW50byBhY2NvdW50IHRoZSB0eXBlIG9mIHRoZSBnaXZlblxuICogdmFsdWUgd2hlbiBnZW5lcmF0aW5nIGl0cyBoYXNoIGNvZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZSh2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eUJvb2wpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPyAxIDogMDtcbiAgICB9IGVsc2UgaWYgKHR5cGVDaGVja2VyLm9rKHZhbHVlLCB0eXBlQ2hlY2tlci50eU51bWJlcikpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIC8qanNsaW50IHBsdXNwbHVzOiB0cnVlICovXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNociA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhhc2ggY29kZSBmb3IgYSBtZW1iZXIgb2YgYW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgY29uZmlndXJhdGlvbjogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IGNvZGUgPSBoYXNoQ29kZSh2YWx1ZSk7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uc3QgYml0cyA9IGNvbmZpZ3VyYXRpb25bbmFtZV07XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZSA8PCBjb25maWd1cmF0aW9uW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBoYXNoIGNvZGUgZm9yIGEgbWVtYmVyIG9mIGFuIG9iamVjdCwgYmFzZWQgb25cbiAqIHRoZSBnaXZlbiBtZW1iZXIgbWVtYmVyLCB0aGUgdmFsdWUgdG8gYmUgaGFzaGVkLCBhbmQgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIGFib3V0IGhvdyBlYWNoIG1lbWJlciBjb250cmlidXRlcyB0byB0aGUgZW5pcmUgaGFzaCBjb2RlIG9mIHRoZVxuICogb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaE1lbWJlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGNvbmZpZ3VyYXRpb246IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgICBpZiAodHlwZUNoZWNrZXIub2sodmFsdWUsIHR5cGVDaGVja2VyLnR5QXJyYXkpKSB7XG4gICAgICAgIGxldCBjb2RlID0gMDtcbiAgICAgICAgLypqc2xpbnQgcGx1c3BsdXM6IHRydWUgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29kZSA9IGNvZGUgKyBoYXNoUHJpbWl0aXZlTWVtYmVyKG5hbWUsIHZhbHVlW2ldLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2hQcmltaXRpdmVNZW1iZXIobmFtZSwgdmFsdWUsIGNvbmZpZ3VyYXRpb24pO1xufVxuIl19