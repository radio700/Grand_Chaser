package jawsbar.com.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import jawsbar.com.Entity.Car;

import java.util.List;


//@RepositoryRestResource(path = "vehicles")//주소창 바꾸고 싶으면...
public interface CarRepo extends CrudRepository<Car,Long>{
    List<Car> findByColor(String Color);
    List<Car> findByYear(int year);

    List<Car> findByBrandAndModel(String Brand, String Model);
    List<Car> findByBrandAndColor(String Brand, String Color);

    //정렬
    List<Car> findByBrandOrderByYearAsc(String Brand);
    
    //row query
    @Query(value = "SELECT C FROM Car C WHERE C.brand = ?1")
    List<Car> findByBrand(String Brand);

    @Query(value = "SELECT C FROM Car C WHERE C.color = ?1")
    List<Car> findByColorWithQuery(String Color);

}
