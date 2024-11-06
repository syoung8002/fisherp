package fisherp.domain;

import java.util.Date;
import lombok.Data;

@Data
public class QueryPurchaseQuery {

    private String accountId;
    private String mainShipName;
    private Date purchaseDateFrom;
    private Date purchaseDateTo;
}
