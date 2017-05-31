class FindDetect < Methods

    def generate

        createQuestion(["find","detect"])

        @array_dummy = [nil].push(@array).flatten       # create a dummy array with values + nil

        @choices << (eval "@array.#{@method} { |x| x #{@comparison_selection} #{@array_selection} }")
        @array_dummy.delete(@choices[0])                     # delete correct answer from alt-array
        @choices.push(@array_dummy.sample(3)).flatten!.shuffle # add three wrong numbers then shuffle

        @question = "array.#{@method} { |x| x #{@comparison_selection} #{@array_selection} }"
        @wrong_answer = @array_dummy.sample
        @wrong_answer =  (@wrong_answer == nil ? "nil" : @wrong_answer )

        answers

    end

end
