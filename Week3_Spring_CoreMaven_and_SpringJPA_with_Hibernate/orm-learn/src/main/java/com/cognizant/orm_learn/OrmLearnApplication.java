package com.cognizant.orm_learn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication(scanBasePackages = "com.cognizant.orm_learn")
@EntityScan(basePackages = "com.cognizant.orm_learn.model")
@EnableJpaRepositories(basePackages = "com.cognizant.orm_learn.repository")


public class OrmLearnApplication implements CommandLineRunner {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        LOGGER.info("Inside main");
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        testGetAllCountries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        LOGGER.info("countries={}", countryService.getAllCountries());
        System.out.println(countryService.getAllCountries());

        LOGGER.info("End");
    }

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}
}

