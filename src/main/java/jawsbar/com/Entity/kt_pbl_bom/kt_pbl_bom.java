package jawsbar.com.Entity.kt_pbl_bom;

import jakarta.persistence.*;
import jawsbar.com.Entity.kt_spec.kt_spec;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@IdClass(kt_pbl_bom_pk.class)
@Table(name = "KT_PBL_BOM")
public class kt_pbl_bom {
    @Id
    @Column(name = "PRJID")
    private String prjid;

    @Id
    @Column(name = "NSN")
    private String nsn;

    @Column(name = "BOM_SEQ")
    private String bomseq;

    @ManyToOne
    @JoinColumns(value = {
            @JoinColumn(name = "ACFTC"),
            @JoinColumn(name = "PN"),
            @JoinColumn(name = "CAGE")
    },foreignKey = @ForeignKey(name = "KT_BOM_FK"))
    private kt_spec ktSpec;
}
