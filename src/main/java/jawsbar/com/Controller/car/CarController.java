package jawsbar.com.Controller.car;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jawsbar.com.Entity.Car;
import jawsbar.com.Repository.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@JsonIgnoreProperties
//@RequestMapping(value = "/api")
public class CarController {

    @Autowired
    private CarRepo carRepo;

    @RequestMapping("/cars")
    public Iterable<Car> getCars(){
        return carRepo.findAll();
    }

    @GetMapping("/hello")
    public String test() {
        return "tlqkf!";
    }

}
