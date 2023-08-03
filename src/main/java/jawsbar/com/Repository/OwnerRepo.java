package jawsbar.com.Repository;

import org.springframework.data.repository.CrudRepository;

import jawsbar.com.Entity.Owner;

public interface OwnerRepo extends CrudRepository<Owner,Long>{
    
}
