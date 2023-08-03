package jawsbar.com.Entity.kt_pbl_bom;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class kt_pbl_bom_pk implements Serializable {
    private String prjid;
    private String nsn;
}
